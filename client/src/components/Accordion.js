import React from "react";

const Accordion = () => {
  return (
    <div class="container accordion py-5 mb-3" id="accordionExample">
        <h5 className="pb-4 text-center">Frequently Asked Questions</h5>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button fw-bold"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Do I need special software or hardware to read eBooks?
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <p>
              All you need is your PC, laptop or hand held device and the free
              Reader software. We offer eBooks in three different formats: PDF
              download, EPUB download and Online Reader. Our Online Reader
              requires no software other than an internet browser. For
              downloading, we will provide you with a link to download the
              appropriate Reader software free of charge when you make a
              purchase
            </p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button
            class="accordion-button collapsed fw-bold"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Can I print and copy my ebooks?
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <p>
              eBooks have DRM security settings that may prevent (or limit)
              printing and copying of some ebooks. These are set by the
              Publisher and vary from ebook to ebook, and even from format to
              format for the same ebook. You can view the security settings for
              each title by clicking the "Print & copy permissions" link below
              the "Add to cart" button on the ebook product page.
            </p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button
            class="accordion-button collapsed fw-bold"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Will I be able to view my eBooks offline using the Ebook Reader for
            iOS and Android?
          </button>
        </h2>
        <div
          id="collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <p>
              Yes. You just need to sync with your bookshelf and download the
              ebook the first time. Once the ebook is downloaded onto your
              device, you can read them offline anytime anywhere!
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
