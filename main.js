const body = document.querySelector('.overflow')
const postForm = document.getElementById('post-info-form')
const postFormArea = document.querySelector('.include-info')
const postText = document.querySelector('.post-txt')
const publishBtn = document.querySelector('.publish-btn')

postForm.addEventListener('click', goToForm)

function goToForm() {
    postFormArea.classList.add('show')
    body.style.overflow = "hidden"
}

publishBtn.addEventListener('click', chekPublish)

function chekValidation() {
    if(postText.value === "") {
        alert('Please fill out the input field')
        return
    } else {
        postText.value = ""
    }
}

function backToHome() {
    postFormArea.classList.remove('show')
    body.style.overflow = "auto"
}

function chekPublish() {
   chekValidation()
   backToHome()
}


// function previewImage(event) {
//     const input = event.target;
    
//     if (input.files && input.files[0]) {
//       const reader = new FileReader();
  
//       reader.onload = function (e) {
//         const imagePreview = document.createElement('img');
//         imagePreview.src = e.target.result;
        
//         // Display the image preview
//         document.body.appendChild(imagePreview);
//       }
  
//       reader.readAsDataURL(input.files[0]);
//     }
//   }

