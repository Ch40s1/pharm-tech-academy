// TypeScript function to load a course dynamically
function loadCourse(courseId: string): void {
  const courseContentDiv = document.getElementById('course-content') as HTMLElement;

  // Fetch the corresponding course HTML file dynamically

  fetch(`../courses/data-entry/${courseId}/page.html`)
      .then(response => {
          if (!response.ok) {
              throw new Error(`Could not load course ${courseId}`);
          }
          return response.text();
      })
      .then(htmlContent => {
          // Inject the fetched HTML content into the div
          courseContentDiv.innerHTML = htmlContent;
      })
      .catch(error => {
          console.error(error);
          courseContentDiv.innerHTML = `<p class="text-red-500">Error loading course content.</p>`;
      });
}
