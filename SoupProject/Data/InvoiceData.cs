using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using SoupProject.DTOs.Invoice;
using SoupProject.Models;
using System;

namespace SoupProject.Data
{
    public class InvoiceData
    {
        private readonly IConfiguration _configuration;
        private readonly string connectionString;

        public InvoiceData(IConfiguration configuration)
        {
            _configuration = configuration;
            connectionString = _configuration.GetConnectionString("DefaultConnection");
        }

        public List<InvoiceDTO> GetInvoiceByUser(Guid userId)
        {
            List<InvoiceDTO> invoiceDTO = new List<InvoiceDTO>();
            string query = $"SELECT o.invoice, o.transactionDate, COUNT(od.courseId) as totalCourse, SUM(c.hargaCourse) as totalPrice FROM `order` o " +
               $"JOIN orderdetail od ON o.invoice = od.invoice " +
               $"JOIN cart ca ON od.courseId = ca.courseId " +
               $"JOIN course c ON ca.courseId = c.courseId " +
               $"WHERE o.userId = @userId " +
               $"GROUP BY o.invoice";

            using (MySqlConnection connection = new MySqlConnection(connectionString))
            {
                using (MySqlCommand command = new MySqlCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@userId", userId);

                    try
                    {
                        connection.Open();

                        using (MySqlDataReader reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                InvoiceDTO invoice = new InvoiceDTO
                                {
                                    invoice = Convert.ToString(reader["invoice"]),
                                    transactionDate = reader["transactionDate"] == DBNull.Value ? DateTime.MinValue : Convert.ToDateTime(reader["transactionDate"]),
                                    totalCourse = reader["totalCourse"] == DBNull.Value ? 0 : Convert.ToInt32(reader["totalCourse"]),
                                    totalPrice = reader["totalPrice"] == DBNull.Value ? 0 : Convert.ToInt32(reader["totalPrice"])
                                };
                                invoiceDTO.Add(invoice);
                            }
                        }
                    }
                    catch (MySqlException)
                    {
                        throw;
                    }
                    finally
                    {
                        connection.Close();
                    }
                }
            }

            return invoiceDTO;
        }

        public List<InvoiceDetailDTO> GetInvoiceDetailByInvoice(string invoice)
        {
            List<InvoiceDetailDTO> invoiceDetailDTO = new List<InvoiceDetailDTO>();
            string query = $"SELECT c.namaCourse, cc.categoryName, ca.courseDate, c.hargaCourse FROM `order` o " +
                $"JOIN orderDetail od ON o.invoice = od.invoice " +
                $"JOIN cart ca ON od.courseId = ca.courseId " +
                $"JOIN course c ON ca.courseId = c.courseId " +
                $"JOIN category cc ON c.kategoriId = cc.categoryId " +
                $"WHERE o.invoice = @invoice";

            using (MySqlConnection connection = new MySqlConnection(connectionString))
            {
                using (MySqlCommand command = new MySqlCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@invoice", invoice);

                    try
                    {
                        connection.Open();

                        using (MySqlDataReader reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                InvoiceDetailDTO invoiceDetail = new InvoiceDetailDTO
                                {
                                    courseName = Convert.ToString(reader["namaCourse"]),
                                    category = Convert.ToString(reader["categoryName"]),
                                    schedule = Convert.ToDateTime(reader["courseDate"]),
                                    coursePrice = Convert.ToInt32(reader["hargaCourse"])
                                };
                                invoiceDetailDTO.Add(invoiceDetail);
                            }
                        }
                    }
                    catch (MySqlException)
                    {
                        throw;
                    }
                    finally
                    {
                        connection.Close();
                    }
                }
            }

            return invoiceDetailDTO;
        }
    }
}
