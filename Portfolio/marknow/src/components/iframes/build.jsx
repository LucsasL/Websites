function build() {
  return (
    <>
      <div id="iframeUi">
        <main>
          <div>
            <section id="site">
              <div>
                <div class="img-div">
                  <picture>
                    <source media="(min-width: 1200px)" srcset="../img/build-img.jpg" />
                    <img src="../img/mobile-build-img.jpg" alt="Build your business online" />
                  </picture>
                </div>

                <div style="flex-flow: column nowrap;">
                  <div>
                    <h1 class="title">
                      We build your website
                    </h1>
                    <p>
                      <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo quod aperiam ipsum ut consequatur aut inventore nisi. Laudantium, impedit rem cumque, consequatur ex mollitia tempora veniam saepe quam expedita veritatis?</span>
                    </p>
                  </div>

                  <div class="tagCont">
                    <span class="tag">
                      Web Development
                    </span>

                    <span class="tag">
                      Semantic Site
                    </span>

                    <span class="tag">
                      CMS Applied
                    </span>

                    <span class="tag">
                      Copywriting
                    </span>

                    <span class="tag">
                      Good structure
                    </span>
                  </div>

                  <div class="tasks space-around">
                    <div class="task">
                      test
                    </div>
                    <div class="task">
                      test
                    </div>
                    <div class="task">
                      test
                    </div>
                  </div>

                  <button class="prim-button">
                    <a href="">
                      Start now
                    </a>
                  </button>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export default build;