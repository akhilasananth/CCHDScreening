using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using NetAlertsApi.Data;
using NetAlertsWeb.Models;

namespace NetAlertsWeb.Controllers
{
    public class BTaskManagersController : Controller
    {
        private readonly ApplicationDbContext _context;

        public BTaskManagersController(ApplicationDbContext context)
        {
            _context = context;    
        }

        // GET: BTaskManagers
        public async Task<IActionResult> Index()
        {
            return View(await _context.BTaskManager.ToListAsync());
        }

        // GET: BTaskManagers/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {

                return NotFound();
            }

            var bTaskManager = await _context.BTaskManager
                .SingleOrDefaultAsync(m => m.BTaskManagerId == id);
            if (bTaskManager == null)
            {
                return NotFound();
            }

            return View(bTaskManager);
        }

        // GET: BTaskManagers/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: BTaskManagers/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create()
        {

        }

        // GET: BTaskManagers/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var bTaskManager = await _context.BTaskManager.SingleOrDefaultAsync(m => m.BTaskManagerId == id);
            if (bTaskManager == null)
            {
                return NotFound();
            }
            return View(bTaskManager);
        }

        // POST: BTaskManagers/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("BTaskManagerId,DateTimeCreated,DateTimePatientBirth")] BTaskManager bTaskManager)
        {
            if (id != bTaskManager.BTaskManagerId)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(bTaskManager);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!BTaskManagerExists(bTaskManager.BTaskManagerId))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction("Index");
            }
            return View(bTaskManager);
        }

        // GET: BTaskManagers/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var bTaskManager = await _context.BTaskManager
                .SingleOrDefaultAsync(m => m.BTaskManagerId == id);
            if (bTaskManager == null)
            {
                return NotFound();
            }

            return View(bTaskManager);
        }

        // POST: BTaskManagers/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var bTaskManager = await _context.BTaskManager.SingleOrDefaultAsync(m => m.BTaskManagerId == id);
            _context.BTaskManager.Remove(bTaskManager);
            await _context.SaveChangesAsync();
            return RedirectToAction("Index");
        }

        private bool BTaskManagerExists(int id)
        {
            return _context.BTaskManager.Any(e => e.BTaskManagerId == id);
        }
    }
}
