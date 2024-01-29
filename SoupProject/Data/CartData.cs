using MySql.Data.MySqlClient;
using SoupProject.Models;

namespace SoupProject.Data
{
    public class CartData
    {
        private readonly IConfiguration _configuration;
        private readonly string ConnectionString;
        public CartData(IConfiguration configuration)
        {
            _configuration = configuration;
            ConnectionString = _configuration.GetConnectionString("DefaultConnection");
        }


        public List<Cart> GetAll()
        {
            List<Cart> carts = new List<Cart>();

            string query = "SELECT * FROM cart";

            using (MySqlConnection connection = new MySqlConnection(ConnectionString))
            {
                using (MySqlCommand command = new MySqlCommand(query, connection))
                {
                    try
                    {
                        connection.Open();

                        using (MySqlDataReader reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                Cart cart = new Cart
                                {
                                    cartId = Convert.ToInt32(reader["cartId"]),
                                    courseId = Convert.ToInt32(reader["courseId"]),
                                    userId = Guid.Parse(reader["userId"].ToString() ?? string.Empty),
                                    isDeleted = Convert.ToBoolean(reader["isDeleted"]),
                                    hargaPerCourse = Convert.ToDecimal(reader["hargaPerCourse"])
                            };

                                carts.Add(cart);
                            }
                        }
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

            return carts;
        }


        public Cart? GetById(int cartId)
        {
            Cart? cart = null;

            string query = "SELECT * FROM cart WHERE cartId = @cartId";

            using (MySqlConnection connection = new MySqlConnection(ConnectionString))
            {
                using (MySqlCommand command = new MySqlCommand(query, connection))
                {
                    command.Connection = connection;
                    command.Parameters.Clear();

                    command.CommandText = query;
                    command.Parameters.AddWithValue("@cartId", cartId);

                    try
                    {
                        connection.Open();

                        using (MySqlDataReader reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                cart = new Cart
                                {
                                    cartId = Convert.ToInt32(reader["cartId"]),
                                    courseId = Convert.ToInt32(reader["courseId"]),
                                    userId = Guid.Parse(reader["userId"].ToString() ?? string.Empty),
                                    isDeleted = Convert.ToBoolean(reader["isDeleted"]),
                                    hargaPerCourse = Convert.ToDecimal(reader["hargaPerCourse"])
                                };
                            }
                        }

                    }
                    catch
                    {

                    }
                    finally { connection.Close(); }
                }
            }

            return cart;
        }

        public bool Insert(Cart cart)
        {
            bool result = false;

            string query = "INSERT INTO cart (courseId, userId, isDeleted, hargaPerCourse) " +
                        "VALUES (@courseId, @userId, @isDeleted, @hargaPerCourse)";


            using (MySqlConnection connection = new MySqlConnection(ConnectionString))
            {
                using (MySqlCommand command = new MySqlCommand())
                {
                    command.Connection = connection;
                    command.Parameters.Clear();

                    command.CommandText = query;

                    //command.Parameters.AddWithValue("@id_course", course.id_course);
                    //command.Parameters.Add(new SqlParameter("@Id", SqlDbType.UniqueIdentifier) { Value = book.Id });
                    //command.Parameters.Add(new SqlParameter("@Id", book.Id));

                    //command.Parameters.AddWithValue("@cartId", cart.cartId);
                    command.Parameters.AddWithValue("@courseId", cart.courseId);
                    command.Parameters.AddWithValue("@userId", cart.userId);
                    command.Parameters.AddWithValue("@isDeleted", cart.isDeleted);
                    command.Parameters.AddWithValue("@hargaPerCourse", cart.hargaPerCourse);

                    try
                    {
                        connection.Open();

                        result = command.ExecuteNonQuery() > 0 ? true : false;
                    }
                    catch
                    {

                    }
                    finally
                    { connection.Close(); }
                }
            }

            return result;
        }
        public bool Delete(int cartId)
        {
            bool result = false;

            string query = $"DELETE FROM cart WHERE cartId = @cartId";

            using (MySqlConnection connection = new MySqlConnection(ConnectionString))
            {
                using (MySqlCommand command = new MySqlCommand())
                {
                    command.Connection = connection;
                    command.Parameters.Clear();

                    command.CommandText = query;
                    command.Parameters.AddWithValue("@cartId", cartId);

                    try
                    {
                        connection.Open();

                        result = command.ExecuteNonQuery() > 0 ? true : false;
                    }
                    catch { }
                    finally { connection.Close(); }
                }
            }

            return result;
        }
    }
}
