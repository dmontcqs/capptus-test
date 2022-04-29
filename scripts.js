function valida(formulario) {
  
    console.log(formulario)
  
    var ok = true;
    var msg = "Debes escribir contenido en los campos:\n";
   
    if(formulario.elements[0].value === "")  //1era forma de acceder al key del objeto
    {
      msg += "- Name\n";
      ok = false;
    }
     if(formulario.elements["Apellido"].value === "") //2da forma de acceder al key del objeto
    {
      msg += "- Apellido\n";
      ok = false;
    }
     if(formulario.ApellidoMaterno.value === "") //3ra forma de acceder al objeto
    {
      msg += "- ApellidoMaterno\n";
      ok = false;
    }
    if(formulario.Email.value === "")
    {
      msg += "- Email\n";
      ok = false;
    }
  
    if(formulario.Numero.value === "")
    {
      msg += "- Número\n";
      ok = false;
    }
    if(formulario.Textarea.value === "")
    {
      msg += "- tu mensaje\n";
      ok = false;
    }
  
     if(ok === false)
      alert(msg);
    return ok;
 }
  
 