$(document).ready(function(){
    function saveFormData() {
      $.ajax({
          url:'https://api.apispreadsheets.com/data/14439/',
          type:'post',
          data:$("#question-form").serializeArray(),
          success: function(){
            alert("Form Data Submitted :)")
          },
          error: function(){
            alert("There was an error :(")
          }
      });
    }
    $('main > img').attr({src: 'images/Profile_Pic.jpg', alt: 'Profile picture'});
    $('main > img').addClass('animated zoomIn slower');
    $('main > h1').text('Arvind Siva');
    $('main > h1').addClass('animated bounce delay-3s');
    $('main > h2').text('Welcome to my portfolio');
    $('main > h2').addClass('animated bounce delay-5s');
    $('#objectives').text('Objectives');
    $('#objectives-sec').text('Seeking a job in computer science where I can use my skills.');
    $('#education').text('Education');
    $('#extracurricular').text('Extracurricular activities');
    $('#skills').text('Skills');
    $('#languages').text('Languages');
    $('#contact').text('Contact');
});
