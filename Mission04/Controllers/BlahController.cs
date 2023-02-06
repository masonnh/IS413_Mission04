﻿using Microsoft.AspNetCore.Mvc;
using Mission04.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04.Controllers
{
    public class BlahController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult Calculator()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Calculator(CalculatorModel model)
        {
            return View();
        }
    }
}
