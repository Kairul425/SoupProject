using SoupProject.Models;
using MySql.Data.MySqlClient;
using System.Text;

namespace SoupProject.Data
{
    public class CourseData
    {
        private readonly IConfiguration _configuration;
        private readonly string ConnectionString;
        public CourseData(IConfiguration configuration)
        {
            _configuration = configuration;
            ConnectionString = _configuration.GetConnectionString("DefaultConnection");
        }


        public List<Course> GetAll()
        {
            List<Course> courses = new List<Course>();

            string query = "SELECT * FROM course";

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
                                Course course = new Course
                                {
                                    id_course = Convert.ToInt32(reader["id_course"]),
                                    nama_course = reader["nama_course"].ToString(),
                                    img_course = reader["img_course"].ToString(),
                                    deskripsi_course = reader["deskripsi_course"].ToString(),
                                    harga_course = Convert.ToDecimal(reader["harga_course"]),
                                    id_kategori = Convert.ToInt32(reader["id_kategori"]),
                                    //kategori = new Kategori
                                    //{
                                    //    id_kategori = Convert.ToInt32(reader["id_kategori"]),
                                    //    nama_kategori = reader["nama_kategori"].ToString(),
                                    //    img_kategori = reader["img_course"].ToString(),
                                    //    deskripsi_kategori = reader["deskripsi_kategori"].ToString()
                                    //}
                                };

                                courses.Add(course);
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

            return courses;
        }


        public Course? GetById(int id_course)
        {
            Course? courses = null;

            string query = "SELECT * FROM course WHERE id_course = @Id_Course";

            using (MySqlConnection connection = new MySqlConnection(ConnectionString))
            {
                using (MySqlCommand command = new MySqlCommand(query, connection))
                {
                    command.Connection = connection;
                    command.Parameters.Clear();

                    command.CommandText = query;
                    command.Parameters.AddWithValue("@Id_Course", id_course);

                    try
                    {
                        connection.Open();

                        using (MySqlDataReader reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                courses = new Course
                                {
                                    id_course = Convert.ToInt32(reader["id_course"]),
                                    nama_course = reader["nama_course"].ToString(),
                                    img_course = reader["img_course"].ToString(),
                                    deskripsi_course = reader["deskripsi_course"].ToString(),
                                    harga_course = Convert.ToDecimal(reader["harga_course"]),
                                    id_kategori = Convert.ToInt32(reader["id_kategori"]),
                                    //kategori = new Kategori
                                    //{
                                    //    id_kategori = Guid.Parse(reader["id_kategori"].ToString() ?? string.Empty),
                                    //    nama_kategori = reader["nama_kategori"].ToString(),
                                    //    img_kategori = reader["img_course"].ToString(),
                                    //    deskripsi_kategori = reader["deskripsi_kategori"].ToString()
                                    //}
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

            return courses;
        }

        public Course? GetByNamaCourse(string nama_course)
        {
            Course? courses = null;

            string query = $"SELECT * FROM course WHERE nama_course = @Nama_Course";

            using (MySqlConnection connection = new MySqlConnection(ConnectionString))
            {
                using (MySqlCommand command = new MySqlCommand(query, connection))
                {
                    command.Connection = connection;
                    command.Parameters.Clear();

                    command.CommandText = query;
                    command.Parameters.AddWithValue("@Nama_Course", nama_course);

                    try
                    {
                        connection.Open();

                        using (MySqlDataReader reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                courses = new Course
                                {
                                    id_course = Convert.ToInt32(reader["id_course"]),
                                    nama_course = reader["nama_course"].ToString(),
                                    img_course = reader["img_course"].ToString(),
                                    deskripsi_course = reader["deskripsi_course"].ToString(),
                                    harga_course = Convert.ToDecimal(reader["harga_course"]),
                                    id_kategori = Convert.ToInt32(reader["id_kategori"]),
                                    //kategori = new Kategori
                                    //{
                                    //    id_kategori = Guid.Parse(reader["id_kategori"].ToString() ?? string.Empty),
                                    //    nama_kategori = reader["nama_kategori"].ToString(),
                                    //    img_kategori = reader["img_course"].ToString(),
                                    //    deskripsi_kategori = reader["deskripsi_kategori"].ToString()
                                    //}
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

            return courses;
        }

        public bool Insert(Course course)
        {
            bool result = false;

            string query = "INSERT INTO course (id_course, nama_course, img_course, deskripsi_course, harga_course, id_kategori) " +
                        "VALUES (@id_course, @nama_course, @img_course, @deskripsi_course, @harga_course, @id_kategori)";


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

                    command.Parameters.AddWithValue("@nama_course", course.nama_course);
                    command.Parameters.AddWithValue("@img_course", course.img_course);
                    command.Parameters.AddWithValue("@deskripsi_course", course.deskripsi_course);
                    command.Parameters.AddWithValue("@harga_course", course.harga_course);
                    command.Parameters.AddWithValue("@id_kategori", course.id_kategori);

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

        public bool Update(int id_course, Course course)
        {
            bool result = false;

            string query = "UPDATE course SET nama_course = @nama_course, img_course = @img_course, deskripsi_course = @deskripsi_course, harga_course = @harga_course, id_kategori = @id_kategori WHERE id_course = @id_course";

            using (MySqlConnection connection = new MySqlConnection(ConnectionString))
            {
                using (MySqlCommand command = new MySqlCommand())
                {
                    command.Connection = connection;
                    command.Parameters.Clear();

                    command.CommandText = query;

                    command.Parameters.AddWithValue("@id_course", id_course);
                    command.Parameters.AddWithValue("@nama_course", course.nama_course);
                    command.Parameters.AddWithValue("@img_course", course.img_course);
                    command.Parameters.AddWithValue("@deskripsi_course", course.deskripsi_course);
                    command.Parameters.AddWithValue("@harga_course", course.harga_course);
                    command.Parameters.AddWithValue("@id_kategori", course.id_kategori);

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

        public bool Delete(int id_course)
        {
            bool result = false;

            string query = $"DELETE FROM course WHERE id_course = @id_course";

            using (MySqlConnection connection = new MySqlConnection(ConnectionString))
            {
                using (MySqlCommand command = new MySqlCommand())
                {
                    command.Connection = connection;
                    command.Parameters.Clear();

                    command.CommandText = query;
                    command.Parameters.AddWithValue("@id_course", id_course);

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
