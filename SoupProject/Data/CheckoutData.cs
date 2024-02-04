using MySql.Data.MySqlClient;
using SoupProject.Models;

namespace SoupProject.Data
{
    public class CheckoutData
    {
        private readonly IConfiguration _configuration;
        private readonly string connectionString;

        public CheckoutData(IConfiguration configuration)
        {
            _configuration = configuration;
            connectionString = _configuration.GetConnectionString("DefaultConnection");
        }

        public bool InsertToCart(Cart cart)
        {
            bool result = false;

            string query = $"INSERT INTO cart (courseId, userId, courseDate, isPaid) " +
                $"VALUES (@courseId, @userId, @courseDate, FALSE)";

            using (MySqlConnection connection = new MySqlConnection(connectionString))
            {
                using (MySqlCommand command = new MySqlCommand())
                {
                    command.Connection = connection;
                    command.Parameters.Clear();
                    command.CommandText = query;

                    command.Parameters.AddWithValue("@courseId", cart.courseId.ToString());
                    command.Parameters.AddWithValue("@userId", cart.userId);
                    command.Parameters.AddWithValue("@courseDate", cart.courseDate.ToString("yyyy-MM-dd HH:mm:ss"));

                    try
                    {
                        connection.Open();
                        result = command.ExecuteNonQuery() > 0 ? true : false;
                    }
                    catch (Exception)
                    {
                        throw;
                    }
                    finally
                    {
                        connection.Close();
                    }
                }
            }

            return result;
        }

        public bool AddToOrder(Order order)
        {
            bool result = false;

            string query = $"INSERT INTO `order` (orderId, invoice, userId, paymentMethod) " +
                $"VALUES (@orderId, @invoice, @userId, @paymentMethod)";

            using (MySqlConnection connection = new MySqlConnection(connectionString))
            {
                using (MySqlCommand command = new MySqlCommand())
                {
                    command.Connection = connection;
                    command.Parameters.Clear();
                    command.CommandText = query;

                    command.Parameters.AddWithValue("@orderId", order.orderId.ToString());
                    command.Parameters.AddWithValue("@invoice", order.invoice.ToString());
                    command.Parameters.AddWithValue("@userId", order.userId.ToString());
                    command.Parameters.AddWithValue("@paymentMethod", order.paymentMethod.ToString());

                    try
                    {
                        connection.Open();
                        result = command.ExecuteNonQuery() > 0 ? true : false;
                    }
                    catch (Exception)
                    {
                        throw;
                    }
                    finally
                    {
                        connection.Close();
                    }
                }
            }

            return result;
        }

        public bool AddToOrderDetail(OrderDetail orderDetail)
        {
            bool result = false;

            string query = $"INSERT INTO orderdetail (invoice, courseId) " +
                $"VALUES (@invoice, @courseId)";

            using (MySqlConnection connection = new MySqlConnection(connectionString))
            {
                using (MySqlCommand command = new MySqlCommand())
                {
                    command.Connection = connection;
                    command.Parameters.Clear();
                    command.CommandText = query;

                    command.Parameters.AddWithValue("@invoice", orderDetail.invoice);
                    command.Parameters.AddWithValue("@courseId", orderDetail.courseId);

                    try
                    {
                        connection.Open();
                        result = command.ExecuteNonQuery() > 0 ? true : false;
                    }
                    catch (Exception)
                    {
                        throw;
                    }
                    finally
                    {
                        connection.Close();
                    }
                }
            }

            return result;
        }

        public bool ConfirmPaidSelectedCourses(Guid userId, int courseId)
        {
            bool result = false;

            string query = $"UPDATE cart SET isPaid = TRUE " +
                $"WHERE userId = @userId AND courseId = @courseId";

            using (MySqlConnection connection = new MySqlConnection(connectionString))
            {
                using (MySqlCommand command = new MySqlCommand())
                {
                    command.Connection = connection;
                    command.Parameters.Clear();
                    command.CommandText = query;

                    command.Parameters.AddWithValue("@userId", userId.ToString());
                    command.Parameters.AddWithValue("@courseId", courseId);

                    try
                    {
                        connection.Open();
                        result = command.ExecuteNonQuery() > 0 ? true : false;
                    }
                    catch (Exception)
                    {
                        throw;
                    }
                    finally
                    {
                        connection.Close();
                    }
                }
            }

            return result;
        }

        /*public bool CheckoutTransaction(Orders orders, OrderDetail orderDetail)
        {
            bool result = false;

            string queryOrder = $"INSERT INTO orders (order_id, invoice_no, order_by, payment_method) " +
                $"VALUES (@order_id, @invoice_no, @order_by, @payment_method)";
            string queryOrderDetail = $"INSERT INTO order_detail (invoice_no, class_id) " +
                $"VALUES (@invoice_no, @class_id)";

            using (MySqlConnection connection = new MySqlConnection(connectionString))
            {
                connection.Open();
                MySqlTransaction transaction = connection.BeginTransaction();

                MySqlCommand commandOrder = new MySqlCommand();
                commandOrder.Connection = connection;
                commandOrder.Transaction = transaction;
                commandOrder.Parameters.Clear();
                commandOrder.CommandText = queryOrder;

                commandOrder.Parameters.AddWithValue("@order_id", orders.orderId.ToString());
                commandOrder.Parameters.AddWithValue("@invoice_no", orders.invoiceNo.ToString());
                commandOrder.Parameters.AddWithValue("@order_by", orders.orderBy.ToString());
                commandOrder.Parameters.AddWithValue("@payment_method", orders.paymentMethod.ToString());

                MySqlCommand commandOrderDetail = new MySqlCommand();
                commandOrderDetail.Connection = connection;
                commandOrderDetail.Transaction = transaction;
                commandOrderDetail.Parameters.Clear();
                commandOrderDetail.CommandText = queryOrderDetail;

                commandOrderDetail.Parameters.AddWithValue("@invoice_no", orderDetail.invoiceNo);
                commandOrderDetail.Parameters.AddWithValue("@class_id", orderDetail.classId);

                try
                {
                    result = (commandOrder.ExecuteNonQuery() > 0 && commandOrderDetail.ExecuteNonQuery() > 0) ? true : false;
                    
                    transaction.Commit();
                }
                catch(Exception)
                {
                    transaction.Rollback();
                }
                finally
                {
                    if(transaction != null) transaction.Dispose();
                    if(commandOrder != null) commandOrder.Dispose();
                    if(commandOrderDetail != null) commandOrderDetail.Dispose();
                    connection.Close();
                }
            }

            return result;
        }*/

    }
}
