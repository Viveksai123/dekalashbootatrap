const reviewsData = [
  {
    id: 1,
    name: "M M",
    date: "15 days ago",
    review: "Tina did an amazing hybrid wispy cat eye set on me. The process was smooth, and the final look exceeded my expectations. I've already received so many compliments, and I can't wait to return for a touch-up. The environment at the salon was so relaxing, with soft music playing in the background, and the team was incredibly accommodating. I especially appreciated how Tina explained each step of the process and gave me tips on maintaining my lashes for a longer-lasting effect. It's not just about the lashes; it's about the overall experience, and this place delivers it all.",
    stars: 4,
    platform: "Google",
    backgroundImage: "./img/image/bg1.png",
    mobileBackgroundImage: "./img/image/bg6.png"
  },
  {
    id: 2,
    name: "John D",
    date: "20 days ago",
    review: "Exceptional service and quality. The staff was friendly and professional, making sure I was comfortable throughout the entire session. The attention to detail was remarkable, and I'm very satisfied with the results. From the moment I walked in, I felt like a valued customer. They even offered me a complimentary drink while I waited for my appointment. The stylist carefully listened to my preferences and worked meticulously to achieve the look I wanted. It's rare to find a place that combines such high-quality services with outstanding customer care.",
    stars: 4,
    platform: "Google",
    backgroundImage: "./img/image/bg2.png",
    mobileBackgroundImage: "./img/image/bg7.png"
  },
  {
    id: 3,
    name: "Jane S",
    date: "10 days ago",
    review: "Loved the lashes, will definitely come back! The team was super professional and created a custom look that perfectly suited my face. It was my first time trying lash extensions, and I'm so happy I chose them. They used top-notch products, and the process was completely painless. I also loved how they took the time to educate me on aftercare to ensure my lashes stay perfect for weeks. The salon ambiance was cozy and inviting, making the entire experience a delight. Thank you for making me feel so confident!",
    stars: 4,
    platform: "Facebook",
    backgroundImage: "./img/image/bg4.png",
    mobileBackgroundImage: "./img/image/bg8.png"
  },
  {
    id: 4,
    name: "Chris P",
    date: "5 days ago",
    review: "Affordable and professional. They explained the entire process in detail and offered great advice on how to care for my lashes. The salon atmosphere was also very welcoming and clean. I appreciated their transparency about pricing and services, which made me feel at ease. The stylist was incredibly attentive and ensured I was satisfied at every step of the process. It's rare to find a place that combines affordability with such a high level of skill and dedication. I'm definitely recommending this place to everyone I know.",
    stars: 4,
    platform: "Google",
    backgroundImage: "./img/image/bg2.png",
    mobileBackgroundImage: "./img/image/bg7.png"
  },
  {
    id: 5,
    name: "Anna K",
    date: "1 month ago",
    review: "Best experience ever! I've been to several lash studios, but none compare to the quality and expertise here. My lashes look natural yet glamorous, and they lasted much longer than I expected. The team's professionalism and friendly attitude made a huge difference. They were attentive to my needs and even gave me a personalized consultation to determine the best style for my face. The salon itself is beautifully designed, adding to the luxurious experience. I'm beyond impressed and can't wait for my next appointment.",
    stars: 4,
    platform: "Facebook",
    backgroundImage: "./img/image/bg1.png",
    mobileBackgroundImage: "./img/image/bg6.png"
  },
  {
    id: 6,
    name: "Mike L",
    date: "3 days ago",
    review: "Highly recommend their services. The stylist was incredibly skilled and patient, ensuring I was happy with the outcome. I've already booked my next appointment and shared their details with my friends. What stood out to me the most was the attention to detail and the genuine care the team showed throughout the session. They didn't just focus on completing the job quickly; they ensured it was done perfectly. The aftercare tips they provided were also extremely helpful, making it easy for me to maintain my new look. This is hands down the best lash studio I've visited!",
    stars: 4,
    platform: "Google",
    backgroundImage: "./img/image/bg4.png",
    mobileBackgroundImage: "./img/image/bg8.png"
  }
];

let currentIndex = 0;

function updateReview() {
  const review = reviewsData[currentIndex];

  // Update review details
  document.getElementById('reviewerInitial').innerText = review.name[0];
  document.getElementById('reviewerName').innerText = review.name;
  document.getElementById('reviewDate').innerText = review.date;
  document.getElementById('reviewText').innerText = review.review;
  document.getElementById('reviewStars').innerHTML = '★'.repeat(review.stars);
  document.getElementById('reviewPlatform').innerText = `Posted on ${review.platform}`;
  
  // Update platform icon
  let platformIcon = '';
  switch (review.platform) {
      case 'Google':
          platformIcon = `
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24">
          <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
          <path fill="#FF3D00" d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
          <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.526 5.026C9.505 39.556 16.227 44 24 44z"/>
          <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
        </svg>`;
          break;
      case 'Facebook':
          platformIcon = `
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="#1877F2" d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5.1 3.7 9.3 8.5 9.9v-7H7.9V12h2.6V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7C18.3 21.3 22 17.1 22 12z"/>
              </svg>`;
          break;
      default:
          platformIcon = `
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="#666" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm4.5-7.5c-.3-.4-.9-.5-1.3-.2l-1.5 1.1V8.5c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v4.9l-1.5-1.1c-.4-.3-1-.2-1.3.2s-.2 1 .2 1.3l3 2.2c.3.2.6.2.9.2.3 0 .6-.1.9-.2l3-2.2c.4-.3.5-.9.2-1.3z"/>
              </svg>`;
  }
  document.getElementById('reviewPlatformIcon').innerHTML = platformIcon;

  // Dynamically change background image based on screen size
  const backgroundImage = window.innerWidth <= 768 
      ? review.mobileBackgroundImage 
      : review.backgroundImage;
  
  document.getElementById('home').style.backgroundImage = `url('${backgroundImage}')`;

  // Move to the next review
  currentIndex = (currentIndex + 1) % reviewsData.length;
}

// Automatically update the review every 2 seconds
setInterval(updateReview, 2000);

// Add a resize event listener to update background on screen size change
window.addEventListener('resize', updateReview);

// Form submission logic
document.getElementById('offerForm').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('offerForm').classList.add('hidden');
  document.getElementById('thankYouMessage').classList.remove('hidden');
});

// Reset form to allow another submission
function resetForm() {
  document.getElementById('thankYouMessage').classList.add('hidden');
  document.getElementById('offerForm').classList.remove('hidden');
}

// Initial review load
updateReview();