using MySql.Data.MySqlClient;
using SoupProject.Models;
using System.Text;
using static System.Reflection.Metadata.BlobBuilder;

namespace SoupProject.Data
{
    public class CategoryData
    {
        private readonly IConfiguration _configuration;
        private readonly string ConnectionString;
        public CategoryData(IConfiguration configuration)
        {
            _configuration = configuration;
            ConnectionString = _configuration.GetConnectionString("DefaultConnection");
        }


        public List<Category> GetAll()
        {
            List<Category> categories = new List<Category>();

            string query = "SELECT * FROM category";

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
                                categories.Add(new Category
                                {
                                    categoryId = Convert.ToInt32(reader["categoryId"]),
                                    categoryName = reader["categoryName"].ToString(),
                                    categoryImg = reader["categoryImg"].ToString(),
                                    categoryDesc = reader["categoryDesc"].ToString()
                                });
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

            return categories;
        }


        public Category? GetById(int categoryId)
        {
            Category? categories = null;

            string query = "SELECT * FROM category WHERE categoryId = @categoryId";

            using (MySqlConnection connection = new MySqlConnection(ConnectionString))
            {
                using (MySqlCommand command = new MySqlCommand(query, connection))
                {
                    command.Connection = connection;
                    command.Parameters.Clear();

                    command.CommandText = query;
                    command.Parameters.AddWithValue("@categoryId", categoryId);

                    try
                    {
                        connection.Open();

                        using (MySqlDataReader reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                categories = new Category
                                {
                                    categoryId = Convert.ToInt32(reader["categoryId"]),
                                    categoryName = reader["categoryName"].ToString(),
                                    categoryImg = reader["categoryImg"].ToString(),
                                    categoryDesc = reader["categoryDesc"].ToString()
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

            return categories;
        }

        public Category? GetByCategoryName(string categoryName)
        {
            Category? categories = null;

            string query = $"SELECT * FROM category WHERE categoryName = @categoryName";

            using (MySqlConnection connection = new MySqlConnection(ConnectionString))
            {
                using (MySqlCommand command = new MySqlCommand(query, connection))
                {
                    command.Connection = connection;
                    command.Parameters.Clear();

                    command.CommandText = query;
                    command.Parameters.AddWithValue("@categoryName", categoryName);

                    try
                    {
                        connection.Open();

                        using (MySqlDataReader reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                categories = new Category
                                {
                                    categoryId = Convert.ToInt32(reader["categoryId"]),
                                    categoryName = reader["categoryName"].ToString(),
                                    categoryImg = reader["categoryImg"].ToString(),
                                    categoryDesc = reader["categoryDesc"].ToString()
                                };
                            }
                        }

                    }
                    catch
                    {
                        throw;
                    }
                    finally { connection.Close(); }
                }
            }

            return categories;
        }

        public bool Insert(Category category)
        {
            bool result = false;

            string query = "INSERT INTO category (categoryName, categoryImg, categoryDesc) " +
                        "VALUES (@categoryName, @categoryImg, @categoryDesc)";

            using (MySqlConnection connection = new MySqlConnection(ConnectionString))
            {
                using (MySqlCommand command = new MySqlCommand())
                {
                    command.Connection = connection;
                    command.Parameters.Clear();

                    command.CommandText = query;

                    //command.Parameters.AddWithValue("@id_category", category.id_category);
                    //command.Parameters.Add(new SqlParameter("@Id", SqlDbType.UniqueIdentifier) { Value = book.Id });
                    //command.Parameters.Add(new SqlParameter("@Id", book.Id));

                    command.Parameters.AddWithValue("@categoryName", category.categoryName);
                    command.Parameters.AddWithValue("@categoryImg", category.categoryImg);
                    command.Parameters.AddWithValue("@categoryDesc", category.categoryDesc);

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

        public bool Update(int categoryId, Category category)
        {
            bool result = false;

            string query = "UPDATE category SET categoryName = @categoryName, categoryImg = @categoryImg, categoryDesc = @categoryDesc WHERE categoryId = @categoryId";

            using (MySqlConnection connection = new MySqlConnection(ConnectionString))
            {
                using (MySqlCommand command = new MySqlCommand())
                {
                    command.Connection = connection;
                    command.Parameters.Clear();

                    command.CommandText = query;

                    command.Parameters.AddWithValue("@categoryId", categoryId);
                    command.Parameters.AddWithValue("@categoryName", category.categoryName);
                    command.Parameters.AddWithValue("@categoryImg", category.categoryImg);
                    command.Parameters.AddWithValue("@categoryDesc", category.categoryDesc);

                    try
                    {
                        connection.Open();

                        result = command.ExecuteNonQuery() > 0 ? true : false;
                    }
                    catch
                    {

                    }
                    finally { connection.Close(); }
                }
            }

            return result;
        }

        public bool Delete(int categoryId)
        {
            bool result = false;

            string query = $"DELETE FROM category WHERE categoryId = @categoryId";

            using (MySqlConnection connection = new MySqlConnection(ConnectionString))
            {
                using (MySqlCommand command = new MySqlCommand())
                {
                    command.Connection = connection;
                    command.Parameters.Clear();

                    command.CommandText = query;
                    command.Parameters.AddWithValue("@categoryId", categoryId);

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
