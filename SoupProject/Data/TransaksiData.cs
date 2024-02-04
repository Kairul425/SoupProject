//using MySql.Data.MySqlClient;
//using SoupProject.Models;

//namespace SoupProject.Data
//{
//    public class TransaksiData
//    {
//        private readonly IConfiguration _configuration;
//        private readonly string ConnectionString;
//        public TransaksiData(IConfiguration configuration)
//        {
//            _configuration = configuration;
//            ConnectionString = _configuration.GetConnectionString("DefaultConnection");
//        }


//        public List<OrderDetail> GetAll()
//        {
//            List<OrderDetail> transaksies = new List<OrderDetail>();

//            string query = "SELECT * FROM transaksi";

//            using (MySqlConnection connection = new MySqlConnection(ConnectionString))
//            {
//                using (MySqlCommand command = new MySqlCommand(query, connection))
//                {
//                    try
//                    {
//                        connection.Open();

//                        using (MySqlDataReader reader = command.ExecuteReader())
//                        {
//                            while (reader.Read())
//                            {
//                                OrderDetail transaksi = new OrderDetail
//                                {
//                                    transaksiId = reader["transaksiId"].ToString(),
//                                    cartId = Convert.ToInt32(reader["cartId"]),
//                                    tanggalTransaksi = Convert.ToDateTime(reader["tanggalTransaksi"]),
//                                    metodePembayaran = reader["metodePembayaran"].ToString(),
//                                    totalHarga = Convert.ToDecimal(reader["totalHarga"])
//                                };

//                                transaksies.Add(transaksi);
//                            }
//                        }
//                    }
//                    catch (Exception)
//                    {
//                        throw;
//                    }
//                    finally
//                    {
//                        connection.Close();
//                    }
//                }
//            }

//            return transaksies;
//        }

//        public OrderDetail? GetById(string transaksiId)
//        {
//            OrderDetail? transaksies = null;

//            string query = "SELECT * FROM transaksi WHERE transaksiId = @transaksiId";

//            using (MySqlConnection connection = new MySqlConnection(ConnectionString))
//            {
//                using (MySqlCommand command = new MySqlCommand(query, connection))
//                {
//                    command.Connection = connection;
//                    command.Parameters.Clear();

//                    command.CommandText = query;
//                    command.Parameters.AddWithValue("@transaksiId", transaksiId);

//                    try
//                    {
//                        connection.Open();

//                        using (MySqlDataReader reader = command.ExecuteReader())
//                        {
//                            while (reader.Read())
//                            {
//                                transaksies = new OrderDetail
//                                {
//                                    transaksiId = reader["transaksiId"].ToString(),
//                                    cartId = Convert.ToInt32(reader["cartId"]),
//                                    tanggalTransaksi = Convert.ToDateTime(reader["tanggalTransaksi"]),
//                                    metodePembayaran = reader["metodePembayaran"].ToString(),
//                                    totalHarga = Convert.ToDecimal(reader["totalHarga"])
//                                };
//                            }
//                        }

//                    }
//                    catch
//                    {

//                    }
//                    finally { connection.Close(); }
//                }
//            }

//            return transaksies;
//        }

//        public bool Insert(OrderDetail transaksi)
//        {
//            bool result = false;

//            string query = "INSERT INTO transaksi (transaksiId, cartId, tanggalTransaksi, metodePembayaran, totalHarga) " +
//                        "VALUES (@transaksiId, @cartId, @tanggalTransaksi, @metodePembayaran, @totalHarga)";


//            using (MySqlConnection connection = new MySqlConnection(ConnectionString))
//            {
//                using (MySqlCommand command = new MySqlCommand())
//                {
//                    command.Connection = connection;
//                    command.Parameters.Clear();

//                    command.CommandText = query;

//                    command.Parameters.AddWithValue("@transaksiId", transaksi.transaksiId);
//                    //command.Parameters.Add(new SqlParameter("@Id", SqlDbType.UniqueIdentifier) { Value = book.Id });
//                    //command.Parameters.Add(new SqlParameter("@Id", book.Id));

//                    command.Parameters.AddWithValue("@cartId", transaksi.cartId);
//                    command.Parameters.AddWithValue("@tanggalTransaksi", transaksi.tanggalTransaksi);
//                    command.Parameters.AddWithValue("@metodePembayaran", transaksi.metodePembayaran);
//                    command.Parameters.AddWithValue("@totalHarga", transaksi.totalHarga);

//                    try
//                    {
//                        connection.Open();

//                        result = command.ExecuteNonQuery() > 0 ? true : false;
//                    }
//                    catch
//                    {

//                    }
//                    finally
//                    { connection.Close(); }
//                }
//            }

//            return result;
//        }
//        public bool Delete(string transaksiId)
//        {
//            bool result = false;

//            string query = $"DELETE FROM transaksi WHERE transaksiId = @transaksiId";

//            using (MySqlConnection connection = new MySqlConnection(ConnectionString))
//            {
//                using (MySqlCommand command = new MySqlCommand())
//                {
//                    command.Connection = connection;
//                    command.Parameters.Clear();

//                    command.CommandText = query;
//                    command.Parameters.AddWithValue("@transaksiId", transaksiId);

//                    try
//                    {
//                        connection.Open();

//                        result = command.ExecuteNonQuery() > 0 ? true : false;
//                    }
//                    catch { }
//                    finally { connection.Close(); }
//                }
//            }

//            return result;
//        }
//    }
//}
