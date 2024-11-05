const vidDiv = document.getElementById("vidDiv");
const video = document.createElement("iframe");

video.setAttribute("id", "videoFrame");

video.setAttribute("src", "https://www.youtube.com/embed/0XAlNvurr2U?si=Ee1GpdUqKfq3mrTM");
video.setAttribute("width", "560");
video.setAttribute("height", "315");
video.setAttribute("title", "YouTube video player");
video.setAttribute("frameborder", "0");
video.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
video.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");

vidDiv.appendChild(video);
