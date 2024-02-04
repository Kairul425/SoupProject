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

            string query = "SELECT c.*, cc.categoryName FROM course c " +
                "JOIN category cc ON c.kategoriId = cc.categoryId";

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
                                    courseId = Convert.ToInt32(reader["courseId"]),
                                    namaCourse = reader["namaCourse"].ToString(),
                                    imgCourse = reader["imgCourse"].ToString(),
                                    deskripsiCourse = reader["deskripsiCourse"].ToString(),
                                    hargaCourse = Convert.ToDecimal(reader["hargaCourse"]),
                                    kategoriId = Convert.ToInt32(reader["kategoriId"]),
                                    categoryName = reader["categoryName"].ToString()
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


        public Course? GetById(int courseId)
        {
            Course? courses = null;

            string query = "SELECT * FROM course WHERE courseId = @courseId";

            using (MySqlConnection connection = new MySqlConnection(ConnectionString))
            {
                using (MySqlCommand command = new MySqlCommand(query, connection))
                {
                    command.Connection = connection;
                    command.Parameters.Clear();

                    command.CommandText = query;
                    command.Parameters.AddWithValue("@courseId", courseId);

                    try
                    {
                        connection.Open();

                        using (MySqlDataReader reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                courses = new Course
                                {
                                    courseId = Convert.ToInt32(reader["courseId"]),
                                    namaCourse = reader["namaCourse"].ToString(),
                                    imgCourse = reader["imgCourse"].ToString(),
                                    deskripsiCourse = reader["deskripsiCourse"].ToString(),
                                    hargaCourse = Convert.ToDecimal(reader["hargaCourse"]),
                                    kategoriId = Convert.ToInt32(reader["kategoriId"]),
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

        public Course? GetByNamaCourse(string namaCourse)
        {
            Course? courses = null;

            string query = $"SELECT * FROM course WHERE namaCourse = @namaCourse";

            using (MySqlConnection connection = new MySqlConnection(ConnectionString))
            {
                using (MySqlCommand command = new MySqlCommand(query, connection))
                {
                    command.Connection = connection;
                    command.Parameters.Clear();

                    command.CommandText = query;
                    command.Parameters.AddWithValue("@namaCourse", namaCourse);

                    try
                    {
                        connection.Open();

                        using (MySqlDataReader reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                courses = new Course
                                {
                                    courseId = Convert.ToInt32(reader["courseId"]),
                                    namaCourse = reader["namaCourse"].ToString(),
                                    imgCourse = reader["imgCourse"].ToString(),
                                    deskripsiCourse = reader["deskripsiCourse"].ToString(),
                                    hargaCourse = Convert.ToDecimal(reader["hargaCourse"]),
                                    kategoriId = Convert.ToInt32(reader["kategoriId"]),
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

            string query = "INSERT INTO course (namaCourse, imgCourse, deskripsiCourse, hargaCourse, kategoriId) " +
                        "VALUES (@namaCourse, @imgCourse, @deskripsiCourse, @hargaCourse, @kategoriId)";


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

                    command.Parameters.AddWithValue("@namaCourse", course.namaCourse);
                    command.Parameters.AddWithValue("@imgCourse", course.imgCourse);
                    command.Parameters.AddWithValue("@deskripsiCourse", course.deskripsiCourse);
                    command.Parameters.AddWithValue("@hargaCourse", course.hargaCourse);
                    command.Parameters.AddWithValue("@kategoriId", course.kategoriId);

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
                    { connection.Close(); }
                }
            }

            return result;
        }

        public bool Update(int courseId, Course course)
        {
            bool result = false;

            string query = "UPDATE course SET namaCourse = @namaCourse, imgCourse = @imgCourse, deskripsiCourse = @deskripsiCourse, " +
                "hargaCourse = @hargaCourse, kategoriId = @kategoriId WHERE courseId = @courseId";

            using (MySqlConnection connection = new MySqlConnection(ConnectionString))
            {
                using (MySqlCommand command = new MySqlCommand())
                {
                    command.Connection = connection;
                    command.Parameters.Clear();

                    command.CommandText = query;

                    command.Parameters.AddWithValue("@courseId", courseId);
                    command.Parameters.AddWithValue("@namaCourse", course.namaCourse);
                    command.Parameters.AddWithValue("@imgCourse", course.imgCourse);
                    command.Parameters.AddWithValue("@deskripsiCourse", course.deskripsiCourse);
                    command.Parameters.AddWithValue("@hargaCourse", course.hargaCourse);
                    command.Parameters.AddWithValue("@kategoriId", course.kategoriId);

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

        public bool Delete(int courseId)
        {
            bool result = false;

            string query = $"DELETE FROM course WHERE courseId = @courseId";

            using (MySqlConnection connection = new MySqlConnection(ConnectionString))
            {
                using (MySqlCommand command = new MySqlCommand())
                {
                    command.Connection = connection;
                    command.Parameters.Clear();

                    command.CommandText = query;
                    command.Parameters.AddWithValue("@courseId", courseId);

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
