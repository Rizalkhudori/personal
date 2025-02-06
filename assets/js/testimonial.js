const testimonials = [
  {
    author: "Nur M Arofiq",
    rating: 4,
    content: "Mantaapp! Terima kasih.",
    image: "profile-picture.jpg",
  },
  {
    author: "Rendy Zulfan",
    rating: 3,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    image: "coding.jpg",
  },
  // ... existing testimonials ...
];

const testimonialsContainer = document.getElementById("testimonialsContainer");

const testimonialsHTML = (testimonialList) => {
  if (!testimonialList.length) {
    return `<p class="no-testimonials">No testimonials found.</p>`;
  }

  return testimonialList
    .map(
      (testimonial) => `
      <div class="testimonial-card">
        <div class="testimonial-profile">
          <img src="assets/img/${testimonial.image}" alt="${testimonial.author}" />
          <div class="profile-info">
            <h3 class="profile-name">${testimonial.author}</h3>
            <div class="testimonial-rating">${"★".repeat(testimonial.rating)}${"☆".repeat(5-testimonial.rating)}</div>
          </div>
        </div>
        <p class="testimonial-content">${testimonial.content}</p>
      </div>`
    )
    .join("");
};

function showAllTestimonials() {
  testimonialsContainer.innerHTML = testimonialsHTML(testimonials);
}

function filterTestimonialByStar(rating) {
  const filteredTestimonial = testimonials.filter(
    (testimonial) => testimonial.rating === rating
  );
  testimonialsContainer.innerHTML = testimonialsHTML(filteredTestimonial);
}

// Initialize testimonials on page load
showAllTestimonials();
