			var a
			var b
			var c
			var x
			//first number
			function rekenCijfer(cijfer)
			{
				x = cijfer;
				document.rekenmachine.vak1.value+=x;
				if (document.rekenmachine.vak1.value.length == 3)
                //if number is 3 digits disable the number buttons:
				{
					document.getElementById("een").setAttribute("OnClick", "");
					document.getElementById("twee").setAttribute("OnClick", "");
					document.getElementById("drie").setAttribute("OnClick", "");
					document.getElementById("vier").setAttribute("OnClick", "");
					document.getElementById("vijf").setAttribute("OnClick", "");
					document.getElementById("zes").setAttribute("OnClick", "");
					document.getElementById("zeven").setAttribute("OnClick", "");
					document.getElementById("acht").setAttribute("OnClick", "");
					document.getElementById("negen").setAttribute("OnClick", "");
					document.getElementById("nul").setAttribute("OnClick", "");
					document.rekenmachine.een.style.backgroundColor="#ccc";
					document.rekenmachine.twee.style.backgroundColor="#ccc";
					document.rekenmachine.drie.style.backgroundColor="#ccc";
					document.rekenmachine.vier.style.backgroundColor="#ccc";
					document.rekenmachine.vijf.style.backgroundColor="#ccc";
					document.rekenmachine.zes.style.backgroundColor="#ccc";
					document.rekenmachine.zeven.style.backgroundColor="#ccc";
					document.rekenmachine.acht.style.backgroundColor="#ccc";
					document.rekenmachine.negen.style.backgroundColor="#ccc";
					document.rekenmachine.nul.style.backgroundColor="#ccc";
				}
			}
			
			//operator
			var y
			function rekenTeken(teken)
			{
				y = teken;
				document.rekenmachine.vak2.value=y;
				document.getElementById("een").setAttribute("OnClick", "rekenCijfer2('1')");
				document.getElementById("twee").setAttribute("OnClick", "rekenCijfer2('2')");
				document.getElementById("drie").setAttribute("OnClick", "rekenCijfer2('3')");
				document.getElementById("vier").setAttribute("OnClick", "rekenCijfer2('4')");
				document.getElementById("vijf").setAttribute("OnClick", "rekenCijfer2('5')");
				document.getElementById("zes").setAttribute("OnClick", "rekenCijfer2('6')");
				document.getElementById("zeven").setAttribute("OnClick", "rekenCijfer2('7')");
				document.getElementById("acht").setAttribute("OnClick", "rekenCijfer2('8')");
				document.getElementById("negen").setAttribute("OnClick", "rekenCijfer2('9')");
				document.getElementById("nul").setAttribute("OnClick", "rekenCijfer2('0')");
                //change memory buttons to save and recall second number:
				document.getElementById("memory").setAttribute("OnClick", "memoryPlus2()");
				document.getElementById("recall").setAttribute("OnClick", "memoryRecall2()");
                //disable the operator buttons when clicked once:
				document.rekenmachine.plus.style.backgroundColor="#ccc";
				document.rekenmachine.min.style.backgroundColor="#ccc";
				document.rekenmachine.keer.style.backgroundColor="#ccc";
				document.rekenmachine.delen.style.backgroundColor="#ccc";
				document.rekenmachine.wortel.style.backgroundColor="#ccc";
				document.rekenmachine.een.style.backgroundColor="#ff0";
				document.rekenmachine.twee.style.backgroundColor="#ff0";
				document.rekenmachine.drie.style.backgroundColor="#ff0";
				document.rekenmachine.vier.style.backgroundColor="#ff0";
				document.rekenmachine.vijf.style.backgroundColor="#ff0";
				document.rekenmachine.zes.style.backgroundColor="#ff0";
				document.rekenmachine.zeven.style.backgroundColor="#ff0";
				document.rekenmachine.acht.style.backgroundColor="#ff0";
				document.rekenmachine.negen.style.backgroundColor="#ff0";
				document.rekenmachine.nul.style.backgroundColor="#ff0";
				document.getElementById("plus").setAttribute("OnClick", "");
				document.getElementById("min").setAttribute("OnClick", "");
				document.getElementById("keer").setAttribute("OnClick", "");
				document.getElementById("delen").setAttribute("OnClick", "");
				document.getElementById("wortel").setAttribute("OnClick", "");
			}
			
			//second number
			var z
			function rekenCijfer2(cijfer2)
			{
				z = cijfer2;
				document.rekenmachine.vak3.value+=z;
				if (document.rekenmachine.vak3.value.length == 3)
                //disable number buttons again:
				{
					document.getElementById("een").setAttribute("OnClick", "");
					document.getElementById("twee").setAttribute("OnClick", "");
					document.getElementById("drie").setAttribute("OnClick", "");
					document.getElementById("vier").setAttribute("OnClick", "");
					document.getElementById("vijf").setAttribute("OnClick", "");
					document.getElementById("zes").setAttribute("OnClick", "");
					document.getElementById("zeven").setAttribute("OnClick", "");
					document.getElementById("acht").setAttribute("OnClick", "");
					document.getElementById("negen").setAttribute("OnClick", "");
					document.getElementById("nul").setAttribute("OnClick", "");
					document.rekenmachine.een.style.backgroundColor="#ccc";
					document.rekenmachine.twee.style.backgroundColor="#ccc";
					document.rekenmachine.drie.style.backgroundColor="#ccc";
					document.rekenmachine.vier.style.backgroundColor="#ccc";
					document.rekenmachine.vijf.style.backgroundColor="#ccc";
					document.rekenmachine.zes.style.backgroundColor="#ccc";
					document.rekenmachine.zeven.style.backgroundColor="#ccc";
					document.rekenmachine.acht.style.backgroundColor="#ccc";
					document.rekenmachine.negen.style.backgroundColor="#ccc";
					document.rekenmachine.nul.style.backgroundColor="#ccc";
				}
			}
			
			//calculate
			function uitKomst()
			{
				a = document.rekenmachine.vak1.value;
				b = document.rekenmachine.vak3.value;
				c = document.rekenmachine.vak2.value;
                //little easter egg, instead of getting 1414 as an answer get hihi:
				if (a==707 && c=="+" && b==707)
				{
					document.rekenmachine.antwoord.value="HIHI";
				}
                //divided by zero:
				else if (c=='/' && b==0)
				{
					document.getElementById("display") .innerHTML='<input id="error" type="text" name="error" readonly />';
					document.rekenmachine.error.style.color="red";
					document.rekenmachine.error.value="Error: divided by 0";
				}
                //do the actual calculation:
				else
				{
					var operators = 
					{
						'+':function(a, b) {return a + b},
						'-':function(a, b) {return a - b},
						'x':function(a, b) {return a * b},
						'/':function(a, b) {return a / b},
					}
					var op = y;
                    //calculate and round the result to 3 decimals, operators[op](...) selects the operator stored in the y variable from the operator variable above:
					document.rekenmachine.antwoord.value=Math.round(operators[op](parseInt(a), parseInt(b))*1000)/1000;
					document.rekenmachine.vak4.style.color="black";
					document.rekenmachine.vak4.value="=";
					//disable the number and operator buttons:
					document.getElementById("plus").setAttribute("OnClick", "");
					document.getElementById("min").setAttribute("OnClick", "");
					document.getElementById("keer").setAttribute("OnClick", "");
					document.getElementById("delen").setAttribute("OnClick", "");
					document.getElementById("wortel").setAttribute("OnClick", "");
					document.rekenmachine.plus.style.backgroundColor="#ccc";
					document.rekenmachine.min.style.backgroundColor="#ccc";
					document.rekenmachine.keer.style.backgroundColor="#ccc";
					document.rekenmachine.delen.style.backgroundColor="#ccc";
					document.rekenmachine.wortel.style.backgroundColor="#ccc";
					document.rekenmachine.is.style.backgroundColor="#ccc";
					document.rekenmachine.clear.style.backgroundColor="#ccc";
					document.rekenmachine.recall.style.backgroundColor="#ccc";
					document.rekenmachine.memory.style.backgroundColor="#ccc";
					
					document.getElementById("een").setAttribute("OnClick", "");
					document.getElementById("twee").setAttribute("OnClick", "");
					document.getElementById("drie").setAttribute("OnClick", "");
					document.getElementById("vier").setAttribute("OnClick", "");
					document.getElementById("vijf").setAttribute("OnClick", "");
					document.getElementById("zes").setAttribute("OnClick", "");
					document.getElementById("zeven").setAttribute("OnClick", "");
					document.getElementById("acht").setAttribute("OnClick", "");
					document.getElementById("negen").setAttribute("OnClick", "");
					document.getElementById("nul").setAttribute("OnClick", "");
					document.rekenmachine.een.style.backgroundColor="#ccc";
					document.rekenmachine.twee.style.backgroundColor="#ccc";
					document.rekenmachine.drie.style.backgroundColor="#ccc";
					document.rekenmachine.vier.style.backgroundColor="#ccc";
					document.rekenmachine.vijf.style.backgroundColor="#ccc";
					document.rekenmachine.zes.style.backgroundColor="#ccc";
					document.rekenmachine.zeven.style.backgroundColor="#ccc";
					document.rekenmachine.acht.style.backgroundColor="#ccc";
					document.rekenmachine.negen.style.backgroundColor="#ccc";
					document.rekenmachine.nul.style.backgroundColor="#ccc";
				}
			}
			
			//square root
			function wortelTrekken()
			{
				a = document.rekenmachine.vak1.value;
				document.rekenmachine.vak2.value="w";
				document.rekenmachine.antwoord.value=Math.round(Math.sqrt(a)*1000)/1000;
			}
			
			//clear screen
			function wisScherm()
			{
                //restore the display:
				document.getElementById("display") .innerHTML='<input id="vak1" type="text" name="vak1" readonly /><input id="vak2" type="text" name="vak2" readonly /><input id="vak3" type="text" name="vak3" readonly /><input id="vak4" type="text" name="vak4"  readonly /><input id="antwoord" type="text" name="antwoord" readonly />';
				//restore the button functions:
                document.getElementById("een").setAttribute("OnClick", "rekenCijfer('1')");
				document.getElementById("twee").setAttribute("OnClick", "rekenCijfer('2')");
				document.getElementById("drie").setAttribute("OnClick", "rekenCijfer('3')");
				document.getElementById("vier").setAttribute("OnClick", "rekenCijfer('4')");
				document.getElementById("vijf").setAttribute("OnClick", "rekenCijfer('5')");
				document.getElementById("zes").setAttribute("OnClick", "rekenCijfer('6')");
				document.getElementById("zeven").setAttribute("OnClick", "rekenCijfer('7')");
				document.getElementById("acht").setAttribute("OnClick", "rekenCijfer('8')");
				document.getElementById("negen").setAttribute("OnClick", "rekenCijfer('9')");
				document.getElementById("nul").setAttribute("OnClick", "rekenCijfer('0')");
				
				document.getElementById("memory").setAttribute("OnClick", "memoryPlus()");
				document.getElementById("recall").setAttribute("OnClick", "memoryRecall()");
				
				document.getElementById("plus").setAttribute("OnClick", "rekenTeken('+')");
				document.getElementById("min").setAttribute("OnClick", "rekenTeken('-')");
				document.getElementById("keer").setAttribute("OnClick", "rekenTeken('x')");
				document.getElementById("delen").setAttribute("OnClick", "rekenTeken('/')");
				document.getElementById("wortel").setAttribute("OnClick", "wortelTrekken()");
				
				document.rekenmachine.een.style.backgroundColor="#ff0";
				document.rekenmachine.twee.style.backgroundColor="#ff0";
				document.rekenmachine.drie.style.backgroundColor="#ff0";
				document.rekenmachine.vier.style.backgroundColor="#ff0";
				document.rekenmachine.vijf.style.backgroundColor="#ff0";
				document.rekenmachine.zes.style.backgroundColor="#ff0";
				document.rekenmachine.zeven.style.backgroundColor="#ff0";
				document.rekenmachine.acht.style.backgroundColor="#ff0";
				document.rekenmachine.negen.style.backgroundColor="#ff0";
				document.rekenmachine.nul.style.backgroundColor="#ff0";
                
				document.rekenmachine.plus.style.backgroundColor="#00f";
				document.rekenmachine.min.style.backgroundColor="#00f";
				document.rekenmachine.keer.style.backgroundColor="#00f";
				document.rekenmachine.delen.style.backgroundColor="#00f";
				document.rekenmachine.wortel.style.backgroundColor="#00f";
				document.rekenmachine.is.style.backgroundColor="#0f0";
				document.rekenmachine.clear.style.backgroundColor="#00f";
				document.rekenmachine.recall.style.backgroundColor="#00f";
				document.rekenmachine.memory.style.backgroundColor="#00f";
                
				document.rekenmachine.vak1.value="";
				document.rekenmachine.vak2.value="";
				document.rekenmachine.vak3.value="";
				document.rekenmachine.vak4.value="";
				document.rekenmachine.antwoord.value="";
                //clear the variables:
				x ="";
				y ="";
				z ="";
			}
			
			//save last entered number in memory/recall number from memory:
			var memory
			var memory2
            //store first number in memory:
			function memoryPlus()
			{
				memory = document.rekenmachine.vak1.value;
			}
            //recall first number in memory:
			function memoryRecall()
			{
				document.rekenmachine.vak1.value=memory;
			}
            //store second number:
			function memoryPlus2()
			{
				memory2 = document.rekenmachine.vak3.value;
			}
            //recall second number:
			function memoryRecall2()
			{
				document.rekenmachine.vak3.value=memory2;
			}
            //clear memory:
			function memoryClear()
			{
				memory = "";
				memory2 = "";
			}