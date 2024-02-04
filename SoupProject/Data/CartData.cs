//using mysql.data.mysqlclient;
//using soupproject.models;

//namespace soupproject.data
//{
//    public class cartdata
//    {
//        private readonly iconfiguration _configuration;
//        private readonly string connectionstring;
//        public cartdata(iconfiguration configuration)
//        {
//            _configuration = configuration;
//            connectionstring = _configuration.getconnectionstring("defaultconnection");
//        }


//        public list<order> getall()
//        {
//            list<order> carts = new list<order>();

//            string query = "select * from cart";

//            using (mysqlconnection connection = new mysqlconnection(connectionstring))
//            {
//                using (mysqlcommand command = new mysqlcommand(query, connection))
//                {
//                    try
//                    {
//                        connection.open();

//                        using (mysqldatareader reader = command.executereader())
//                        {
//                            while (reader.read())
//                            {
//                                order cart = new order
//                                {
//                                    cartid = convert.toint32(reader["cartid"]),
//                                    courseid = convert.toint32(reader["courseid"]),
//                                    userid = guid.parse(reader["userid"].tostring()),
//                                    isdeleted = convert.toboolean(reader["isdeleted"]),
//                                    hargapercourse = convert.todecimal(reader["hargapercourse"])
//                                };

//                                carts.add(cart);
//                            }
//                        }
//                    }
//                    catch (exception)
//                    {
//                        throw;
//                    }
//                    finally
//                    {
//                        connection.close();
//                    }
//                }
//            }

//            return carts;
//        }


//        public order? getbyid(int cartid)
//        {
//            order? cart = null;

//            string query = "select * from cart where cartid = @cartid";

//            using (mysqlconnection connection = new mysqlconnection(connectionstring))
//            {
//                using (mysqlcommand command = new mysqlcommand(query, connection))
//                {
//                    command.connection = connection;
//                    command.parameters.clear();

//                    command.commandtext = query;
//                    command.parameters.addwithvalue("@cartid", cartid);

//                    try
//                    {
//                        connection.open();

//                        using (mysqldatareader reader = command.executereader())
//                        {
//                            while (reader.read())
//                            {
//                                cart = new order
//                                {
//                                    cartid = convert.toint32(reader["cartid"]),
//                                    courseid = convert.toint32(reader["courseid"]),
//                                    userid = guid.parse(reader["userid"].tostring()),
//                                    isdeleted = convert.toboolean(reader["isdeleted"]),
//                                    hargapercourse = convert.todecimal(reader["hargapercourse"])
//                                };
//                            }
//                        }

//                    }
//                    catch
//                    {

//                    }
//                    finally { connection.close(); }
//                }
//            }

//            return cart;
//        }

//        public bool insert(order cart)
//        {
//            bool result = false;

//            string query = "insert into cart (courseid, userid, isdeleted, hargapercourse) " +
//                        "values (@courseid, @userid, @isdeleted, @hargapercourse)";


//            using (mysqlconnection connection = new mysqlconnection(connectionstring))
//            {
//                using (mysqlcommand command = new mysqlcommand())
//                {
//                    command.connection = connection;
//                    command.parameters.clear();

//                    command.commandtext = query;

//                    command.parameters.addwithvalue("@id_course", course.id_course);
//                    command.parameters.add(new sqlparameter("@id", sqldbtype.uniqueidentifier) { value = book.id });
//                    command.parameters.add(new sqlparameter("@id", book.id));

//                    command.parameters.addwithvalue("@cartid", cart.cartid);
//                    command.parameters.addwithvalue("@courseid", cart.courseid);
//                    command.parameters.addwithvalue("@userid", cart.userid);
//                    command.parameters.addwithvalue("@isdeleted", cart.isdeleted);
//                    command.parameters.addwithvalue("@hargapercourse", cart.hargapercourse);

//                    try
//                    {
//                        connection.open();

//                        result = command.executenonquery() > 0 ? true : false;
//                    }
//                    catch
//                    {

//                    }
//                    finally
//                    { connection.close(); }
//                }
//            }

//            return result;
//        }
//        public bool delete(int cartid)
//        {
//            bool result = false;

//            string query = $"delete from cart where cartid = @cartid";

//            using (mysqlconnection connection = new mysqlconnection(connectionstring))
//            {
//                using (mysqlcommand command = new mysqlcommand())
//                {
//                    command.connection = connection;
//                    command.parameters.clear();

//                    command.commandtext = query;
//                    command.parameters.addwithvalue("@cartid", cartid);

//                    try
//                    {
//                        connection.open();

//                        result = command.executenonquery() > 0 ? true : false;
//                    }
//                    catch { }
//                    finally { connection.close(); }
//                }
//            }

//            return result;
//        }
//    }
//}
