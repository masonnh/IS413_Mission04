using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04.Models
{
    public class CalculatorModel
    {
        [Range(0,100)]
        public int assignments { get; set; }

        [Range(0, 100)]
        public int groupProjects { get; set; }

        [Range(0, 100)]
        public int quizzes { get; set; }

        [Range(0, 100)]
        public int midterm { get; set; }

        [Range(0, 100)]
        public int final { get; set; }

        [Range(0, 100)]
        public int intex { get; set; }
    }
}
