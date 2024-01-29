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
                                    kategoriId = Convert.ToInt32(reader["kategoriId"]),
                                    namaKategori = reader["namaKategori"].ToString(),
                                    imgKategori = reader["imgKategori"].ToString(),
                                    deskripsiKategori = reader["deskripsiKategori"].ToString()
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


        public Kategori? GetById(int kategoriId)
        {
            Kategori? kategories = null;

            string query = "SELECT * FROM kategori WHERE kategoriId = @kategoriId";

            using (MySqlConnection connection = new MySqlConnection(ConnectionString))
            {
                using (MySqlCommand command = new MySqlCommand(query, connection))
                {
                    command.Connection = connection;
                    command.Parameters.Clear();

                    command.CommandText = query;
                    command.Parameters.AddWithValue("@kategoriId", kategoriId);

                    try
                    {
                        connection.Open();

                        using (MySqlDataReader reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                kategories = new Kategori
                                {
                                    kategoriId = Convert.ToInt32(reader["kategoriId"]),
                                    namaKategori = reader["namaKategori"].ToString(),
                                    imgKategori = reader["imgKategori"].ToString(),
                                    deskripsiKategori = reader["deskripsiKategori"].ToString()
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

        public Kategori? GetByNamaCourse(string namaKategori)
        {
            Kategori? kategories = null;

            string query = $"SELECT * FROM kategori WHERE namaKategori = @namaKategori";

            using (MySqlConnection connection = new MySqlConnection(ConnectionString))
            {
                using (MySqlCommand command = new MySqlCommand(query, connection))
                {
                    command.Connection = connection;
                    command.Parameters.Clear();

                    command.CommandText = query;
                    command.Parameters.AddWithValue("@namaKategori", namaKategori);

                    try
                    {
                        connection.Open();

                        using (MySqlDataReader reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                kategories = new Kategori
                                {
                                    kategoriId = Convert.ToInt32(reader["kategoriId"]),
                                    namaKategori = reader["namaKategori"].ToString(),
                                    imgKategori = reader["imgKategori"].ToString(),
                                    deskripsiKategori = reader["deskripsiKategori"].ToString()
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

            string query = "INSERT INTO kategori (namaKategori, imgKategori, deskripsiKategori) " +
                        "VALUES (@namaKategori, @imgKategori, @deskripsiKategori)";

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

                    command.Parameters.AddWithValue("@namaKategori", kategori.namaKategori);
                    command.Parameters.AddWithValue("@imgKategori", kategori.imgKategori);
                    command.Parameters.AddWithValue("@deskripsiKategori", kategori.deskripsiKategori);

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

        public bool Update(int kategoriId, Kategori kategori)
        {
            bool result = false;

            string query = "UPDATE kategori SET namaKategori = @namaKategori, imgKategori = @imgKategori, deskripsiKategori = @deskripsiKategori WHERE kategoriId = @kategoriId";

            using (MySqlConnection connection = new MySqlConnection(ConnectionString))
            {
                using (MySqlCommand command = new MySqlCommand())
                {
                    command.Connection = connection;
                    command.Parameters.Clear();

                    command.CommandText = query;

                    command.Parameters.AddWithValue("@kategoriId", kategoriId);
                    command.Parameters.AddWithValue("@namaKategori", kategori.namaKategori);
                    command.Parameters.AddWithValue("@imgKategori", kategori.imgKategori);
                    command.Parameters.AddWithValue("@deskripsiKategori", kategori.deskripsiKategori);

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

        public bool Delete(int kategoriId)
        {
            bool result = false;

            string query = $"DELETE FROM kategori WHERE kategoriId = @kategoriId";

            using (MySqlConnection connection = new MySqlConnection(ConnectionString))
            {
                using (MySqlCommand command = new MySqlCommand())
                {
                    command.Connection = connection;
                    command.Parameters.Clear();

                    command.CommandText = query;
                    command.Parameters.AddWithValue("@kategoriId", kategoriId);

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
