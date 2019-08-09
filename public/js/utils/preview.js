function preview(){
    var preview=document.querySelector('img');
    var file=document.querySelector('input[type=file]').files[0];
    var reader=new FileReader();

    reader.addEventListener('load',()=>{
        preview.src=reader.result
    })
    if (file) {
        reader.readAsDataURL(file);
      }
}

