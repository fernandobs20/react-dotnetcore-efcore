using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Mvc;
using ProAtividade.API.Data;
using ProAtividade.API.Models;

namespace ProAtividade.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AtividadeController : ControllerBase
    {
        private readonly DataContext _context;
        public AtividadeController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Atividade> Get()
        {
            return _context.Atividades;
        }

        [HttpGet("{id}")]
        public Atividade Get(int id)
        {
            return _context.Atividades.FirstOrDefault(a => a.Id == id);
        }

        [HttpPost]
        public IEnumerable<Atividade> Post(Atividade atividade)
        {
            if (atividade == null)
            {
                throw new ArgumentNullException(nameof(atividade));
            }

            _context.Atividades.Add(atividade);
            if (_context.SaveChanges() > 0)
            {
                return _context.Atividades;
            }
            else
            {
                throw new Exception("Você não conseguiu adicionar uma Atividade.");
            }
        }

        [HttpPut("{id}")]
        public Atividade Put(int id, Atividade atividade)
        {
            if (atividade == null || atividade.Id != id)
            {
                throw new ArgumentException("Atividade inválida ou ID não corresponde.");
            }
            _context.Atividades.Update(atividade);
            if (_context.SaveChanges() > 0)
            {
                return _context.Atividades.FirstOrDefault(a => a.Id == id);
            }
            else
            {
                throw new Exception("Você não conseguiu atualizar a Atividade.");
            }
        }   
        
        [HttpDelete("{id}")]
        public bool Delete(int id)
        {
            var atividade = _context.Atividades.FirstOrDefault(a => a.Id == id);
            if (atividade == null)
            {
                throw new KeyNotFoundException("Atividade não encontrada.");
            }

            _context.Atividades.Remove(atividade);
            
            return _context.SaveChanges() > 0;
        }


        
    }
}