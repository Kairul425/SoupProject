using Microsoft.AspNetCore.Mvc;
using SoupProject.Data;
using SoupProject.DTOs.Invoice;
using System;

namespace SoupProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InvoiceController : ControllerBase
    {
        private readonly InvoiceData invoiceData;

        public InvoiceController(InvoiceData invoiceData)
        {
            this.invoiceData = invoiceData;
        }

        [HttpGet("GetInvoiceByUser")]
        public IActionResult GetInvoice(Guid userId)
        {
            try
            {
                List<InvoiceDTO> invoice = invoiceData.GetInvoiceByUser(userId);
                return StatusCode(200, invoice);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("GetInvoiceDetailByInvoice")]
        public IActionResult GetInvoiceDetail(string invoice)
        {
            try
            {
                List<InvoiceDetailDTO> invoiceDetail = invoiceData.GetInvoiceDetailByInvoice(invoice);
                return StatusCode(200, invoiceDetail);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}