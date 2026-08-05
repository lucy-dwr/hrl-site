export function createApp(): HTMLElement {
  const page = document.createElement('main')
  page.className = 'site-main'

  page.innerHTML = `
    <section class="hero" aria-labelledby="page-title">
      <p class="eyebrow">California Department of Water Resources</p>
      <h1 id="page-title">Healthy Rivers and Landscapes</h1>
      <p>
        Learn about the Healthy Rivers and Landscapes Program on
        the California Natural Resources Agency website.
      </p>
      <div class="action-links">
        <a
          class="button-link"
          href="https://resources.ca.gov/Initiatives/Voluntary-Agreements-Page"
        >
          Visit the CNRA landing page
        </a>
        <a class="button-link button-link--secondary" href="/restoration-map/">
          Explore the restoration map
        </a>
      </div>

      <section class="contact" aria-labelledby="contact-title">
        <h2 id="contact-title">Contact</h2>
        <p>
          Email
          <a href="mailto:HealthyRiversandLandscapes@resources.ca.gov">
            HealthyRiversandLandscapes@resources.ca.gov
          </a>
        </p>
      </section>
    </section>
  `

  return page
}
