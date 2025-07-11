let noButtonClickCount = 0;
let noButtonState = 0;

// Đảm bảo GIF ban đầu hiển thị khi tải trang
document.getElementById("gifContainer").style.display = "block";

document.getElementById("siBtn").addEventListener("click", function () {
  // Ẩn các container GIF buồn và GIF ban đầu
  document.getElementById("sadGifContainer").style.display = "none";
  document.getElementById("sadGifContainer1").style.display = "none";
  document.getElementById("sadGifContainer2").style.display = "none";
  document.getElementById("gifContainer").style.display = "none";
  
  // Hiển thị GIF vui đầu tiên
  document.getElementById("happyGifContainer").style.display = "block";

  // Ẩn câu hỏi và các nút
  document.getElementById("question").style.display = "none"; 
  document.getElementById("siBtn").style.display = "none";
  document.body.classList.add("bg-green");
  document.getElementById("noBtn").style.display = "none";

  // Hiển thị và cập nhật tin nhắn
  document.getElementById("messageContainer").style.display = "block";
  document.getElementById("messageContainer").innerHTML =
    "Anh biết là em sẽ đồng ý làm người yêu anh mà<33";

  // Chuỗi hiển thị các GIF vui theo thời gian
  setTimeout(function () {
    document.getElementById("happyGifContainer").style.display = "none";
    document.getElementById("happyGifContainer2").style.display = "block";
  }, 1000);

  setTimeout(function () {
    document.getElementById("happyGifContainer2").style.display = "none";
    document.getElementById("happyGifContainer3").style.display = "block";
  }, 2000);
  setTimeout(function () {
    document.getElementById("happyGifContainer3").style.display = "none";
    document.getElementById("happyGifContainer4").style.display = "block";
  }, 3000);

  // BẮT ĐẦU ĐOẠN CODE MƯA CHỮ
  const rainContainer = document.getElementById('rainContainer');
  const lovePhrase = "anh yêu em"; // Cụm từ bạn muốn rơi

  function createFallingLetter() {
      const span = document.createElement('span');
      span.classList.add('falling-letter');
      
      // Gán trực tiếp cụm từ "anh yêu em"
      span.textContent = lovePhrase;

      // Vị trí xuất hiện ngẫu nhiên theo chiều ngang
      span.style.left = `${Math.random() * 100}vw`;

      // Độ trễ rơi ngẫu nhiên để tạo hiệu ứng không đồng đều
      const delay = Math.random() * 5; // Độ trễ tối đa 5 giây
      span.style.animationDelay = `${delay}s`;

      // Thời gian rơi ngẫu nhiên (từ 5 đến 12 giây)
      const duration = Math.random() * 7 + 5;
      span.style.animationDuration = `${duration}s`;

      rainContainer.appendChild(span);

      // Xóa chữ cái sau khi nó rơi hết màn hình để tránh tích tụ quá nhiều phần tử
      setTimeout(() => {
          span.remove();
      }, (duration + delay) * 1000 + 500); // Cộng thêm 0.5s để đảm bảo animation kết thúc
  }

  // Tạo một số cụm từ rơi ban đầu để khởi động hiệu ứng
  for (let i = 0; i < 20; i++) { // Tạo 20 cụm từ ban đầu
      createFallingLetter();
  }

  // Lặp lại việc tạo chữ rơi liên tục
  let rainInterval = setInterval(() => {
      // Mỗi lần lặp tạo thêm một vài cụm từ
      for (let i = 0; i < 2; i++) { // Tạo 2 cụm từ trong mỗi interval
          createFallingLetter();
      }
  }, 750); // Cứ 0.75 giây tạo thêm cụm từ

  // Dừng mưa chữ sau một khoảng thời gian nhất định (ví dụ: 30 giây)
  setTimeout(() => {
      clearInterval(rainInterval);
      // Tùy chọn: Xóa tất cả các chữ cái còn lại
      // rainContainer.innerHTML = '';
  }, 30000); // Dừng sau 30 giây
});


// Đoạn code xử lý nút "Không" giữ nguyên như cũ
document.getElementById("noBtn").addEventListener("click", function () {
  switch (noButtonState) {
    case 0:
      document.getElementById("happyGifContainer").style.display = "none";
      document.getElementById("gifContainer").style.display = "none";
      document.getElementById("sadGifContainer").style.display = "block";

      document.getElementById("noBtn").innerHTML = "Không!";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("siBtn").style.fontSize = "40px";
      document.getElementById("siBtn").style.padding = "20px 40px";

      noButtonClickCount++;
      noButtonState++;
      break;

    case 1:
      document.getElementById("noBtn").innerHTML = "Không!!";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "block";

      document.getElementById("siBtn").style.fontSize = "50px";
      document.getElementById("siBtn").style.padding = "30px 50px";

      noButtonState++;
      break;

    case 2:
      document.getElementById("noBtn").innerHTML = "Em không đồng ý";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "block";

      document.getElementById("siBtn").style.fontSize = "60px";
      document.getElementById("siBtn").style.padding = "40px 60px";

      noButtonState++;
      break;

    case 3:
      document.getElementById("noBtn").innerHTML = "Khônggggggg";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("siBtn").style.fontSize = "70px";
      document.getElementById("siBtn").style.padding = "50px 70px";

      noButtonState++;
      break;
    case 4:
      document.getElementById("noBtn").innerHTML = "không mà";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("siBtn").style.fontSize = "80px";
      document.getElementById("siBtn").style.padding = "60px 80px";

      noButtonState++;
      break;
    case 5:
      document.getElementById("noBtn").innerHTML = "Em không chịu đâu";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("siBtn").style.fontSize = "90px";
      document.getElementById("siBtn").style.padding = "70px 90px";

      noButtonState++;
      break;
    case 6:
      document.getElementById("noBtn").innerHTML = "KHÔNG";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("siBtn").style.fontSize = "100px";
      document.getElementById("siBtn").style.padding = "80px 100px";

      noButtonState++;
      break;
    case 7:
      document.getElementById("noBtn").innerHTML = "Em xin thua!";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("siBtn").style.fontSize = "120px";
      document.getElementById("siBtn").style.padding = "120px 130px";

      noButtonState++;
      document.getElementById("noBtn").onclick = function() {
        if (confirm("EM THẬT SỰ KHÔNG YÊU ANH SAO?")) {
            window.location.href = "./troll.mp4";
        }  
    };  
      break;

    default:
      break;
  }
});
