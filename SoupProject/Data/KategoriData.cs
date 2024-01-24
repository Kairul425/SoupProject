using MySql.Data.MySqlClient;
using SoupProject.Models;
using System.Text;
using static System.Reflection.Metadata.BlobBuilder;

namespace SoupProject.Data
{
    public class KategoriData
    {
        private readonly IConfiguration _configuration;
        private readonly string ConnectionString;
        public KategoriData(IConfiguration configuration)
        {
            _configuration = configuration;
            ConnectionString = _configuration.GetConnectionString("DefaultConnection");
        }


        public List<Kategori> GetAll()
        {
            List<Kategori> kategories = new List<Kategori>();

            string query = "SELECT * FROM kategori";

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
                                kategories.Add(new Kategori
                                {
                                    id_kategori = Convert.ToInt32(reader["id_kategori"]),
                                    nama_kategori = reader["nama_kategori"].ToString(),
                                    img_kategori = reader["img_kategori"].ToString(),
                                    deskripsi_kategori = reader["deskripsi_kategori"].ToString()
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

            return kategories;
        }


        public Kategori? GetById(int id_kategori)
        {
            Kategori? kategories = null;

            string query = "SELECT * FROM kategori WHERE id_kategori = @id_kategori";

            using (MySqlConnection connection = new MySqlConnection(ConnectionString))
            {
                using (MySqlCommand command = new MySqlCommand(query, connection))
                {
                    command.Connection = connection;
                    command.Parameters.Clear();

                    command.CommandText = query;
                    command.Parameters.AddWithValue("@id_kategori", id_kategori);

                    try
                    {
                        connection.Open();

                        using (MySqlDataReader reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                kategories = new Kategori
                                {
                                    id_kategori = Convert.ToInt32(reader["id_kategori"]),
                                    nama_kategori = reader["nama_course"].ToString(),
                                    img_kategori = reader["img_course"].ToString(),
                                    deskripsi_kategori = reader["deskripsi_course"].ToString()
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

            return kategories;
        }

        public Kategori? GetByNamaCourse(string nama_kategori)
        {
            Kategori? kategories = null;

            string query = $"SELECT * FROM kategori WHERE nama_kategori = @nama_kategori";

            using (MySqlConnection connection = new MySqlConnection(ConnectionString))
            {
                using (MySqlCommand command = new MySqlCommand(query, connection))
                {
                    command.Connection = connection;
                    command.Parameters.Clear();

                    command.CommandText = query;
                    command.Parameters.AddWithValue("@nama_kategori", nama_kategori);

                    try
                    {
                        connection.Open();

                        using (MySqlDataReader reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                kategories = new Kategori
                                {
                                    id_kategori = Convert.ToInt32(reader["id_kategori"]),
                                    nama_kategori = reader["nama_course"].ToString(),
                                    img_kategori = reader["img_course"].ToString(),
                                    deskripsi_kategori = reader["deskripsi_course"].ToString()
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

            return kategories;
        }

        public bool Insert(Kategori kategori)
        {
            bool result = false;

            string query = "INSERT INTO kategori (id_kategori, nama_kategori, img_kategori, deskripsi_kategori) " +
                        "VALUES (@id_kategori, @nama_kategori, @img_kategori, @deskripsi_kategori)";


            using (MySqlConnection connection = new MySqlConnection(ConnectionString))
            {
                using (MySqlCommand command = new MySqlCommand())
                {
                    command.Connection = connection;
                    command.Parameters.Clear();

                    command.CommandText = query;

                    //command.Parameters.AddWithValue("@id_kategori", kategori.id_kategori);
                    //command.Parameters.Add(new SqlParameter("@Id", SqlDbType.UniqueIdentifier) { Value = book.Id });
                    //command.Parameters.Add(new SqlParameter("@Id", book.Id));

                    command.Parameters.AddWithValue("@nama_kategori", kategori.nama_kategori);
                    command.Parameters.AddWithValue("@img_kategori", kategori.img_kategori);
                    command.Parameters.AddWithValue("@deskripsi_kategori", kategori.deskripsi_kategori);

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

        public bool Update(int id_kategori, Kategori kategori)
        {
            bool result = false;

            string query = "UPDATE kategori SET nama_kategori = @nama_kategori, img_kategori = @img_kategori, deskripsi_kategori = @deskripsi_kategori WHERE id_kategori = @id_kategori";

            using (MySqlConnection connection = new MySqlConnection(ConnectionString))
            {
                using (MySqlCommand command = new MySqlCommand())
                {
                    command.Connection = connection;
                    command.Parameters.Clear();

                    command.CommandText = query;

                    command.Parameters.AddWithValue("@id_kategori", id_kategori);
                    command.Parameters.AddWithValue("@nama_kategori", kategori.nama_kategori);
                    command.Parameters.AddWithValue("@img_kategori", kategori.img_kategori);
                    command.Parameters.AddWithValue("@deskripsi_kategori", kategori.deskripsi_kategori);

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

        public bool Delete(int id_kategori)
        {
            bool result = false;

            string query = $"DELETE FROM kategori WHERE id_kategori = @id_kategori";

            using (MySqlConnection connection = new MySqlConnection(ConnectionString))
            {
                using (MySqlCommand command = new MySqlCommand())
                {
                    command.Connection = connection;
                    command.Parameters.Clear();

                    command.CommandText = query;
                    command.Parameters.AddWithValue("@id_kategori", id_kategori);

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
