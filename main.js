
/*document.write("<table border='2'><th>");

for (var i = 0; i < employees.length; i++) {
	

	document.write("<tr><td>Name</td>" + employees[i].firstname + "");
	document.write("<td>Surname</td>" + employees[i].lastname + "");
	document.write("<td>Jobtitle</td>" + employees[i].jobtitle + "");
	document.write("<td>Salary</td>" + employees[i].salary + "");
	document.write("<td>Email Address</td>" + employees[i].emailaddress + "");
	document.write("<td>ID</td>" + employees[i].uniqueid + "");
	
	
	
    }
 document.write("</th></table>");*/


   document.writeln("<h2>JSON array object</h2>");
    var i = 0
    document.writeln("<table border='2'><tr>");
    for (i = 0; i < employees.length; i++) {
        document.writeln("<td>");
        document.writeln("<table border='1' width=100 >");
        document.writeln("<tr><td><b>First Name</b></td><td width=50>" + employees[i].firstname + "</td></tr>");
        document.writeln("<tr><td><b>Last Name</b></td><td width=50>" + employees[i].lastname + "</td></tr>");
        document.writeln("<tr><td><b>E-mail</b></td><td width=50>" + employees[i].emailaddress + "</td></tr>");
        document.writeln("<tr><td><b>Job Title</b></td><td width=50>" + employees[i].jobtitle + "</td></tr>");
        document.writeln("<tr><td><b>Salary</b></td><td width=50>" + employees[i].salary + "</td></tr>");
        document.writeln("<tr><td><b>Unique ID</b></td><td width=50>" + employees[i].uniqueid + "</td></tr>");
        document.writeln("</table>");
        document.writeln("</td>");
    }
    document.writeln("</tr></table>");

   /* var table = '';
		for (var i = 0; i < employees.length; i++){
			table += '<tr>';
			table += '<td>' + employees[i].uniqueid + '</td>';
			table += '<td>' + employees[i].firstname + '</td>';
			table += '<td>' + employees[i].lastname + '</td>';
			table += '<td>' + employees[i].emailaddress + '</td>';
			table += '<td>' + employees[i].jobtitle + '</td>';
			table += '<td>' + employees[i].salary + '</td>';
			table += '</tr>';
		}
		document.write('<table border=1>' + table + '</table>'); */
  