<template>
  <section
    v-if="payload && payload.data.length"
    class="
      elementor-section
      elementor-top-section
      elementor-element
      elementor-element-796c8be4
      elementor-section-boxed
      elementor-section-height-default
      elementor-section-height-default
    "
    data-id="796c8be4"
    data-element_type="section"
    data-settings='{"background_background":"classic"}'
  >
    <div class="elementor-container elementor-column-gap-default">
      <div class="elementor-row">
        <div
          class="
            elementor-column
            elementor-col-100
            elementor-top-column
            elementor-element
            elementor-element-3886f377
          "
          data-id="3886f377"
          data-element_type="column"
        >
          <div class="elementor-column-wrap elementor-element-populated">
            <div class="elementor-widget-wrap">
              <section
                class="
                  elementor-section
                  elementor-inner-section
                  elementor-element
                  elementor-element-6bc560f7
                  elementor-section-boxed
                  elementor-section-height-default
                  elementor-section-height-default
                "
                data-id="6bc560f7"
                data-element_type="section"
              >
                <div class="elementor-container elementor-column-gap-default">
                  <div class="elementor-row">
                    <div
                      class="
                        elementor-column
                        elementor-col-100
                        elementor-inner-column
                        elementor-element
                        elementor-element-6f5e01f7
                      "
                      data-id="6f5e01f7"
                      data-element_type="column"
                    >
                      <div
                        class="
                          elementor-column-wrap elementor-element-populated
                        "
                      >
                        <div class="elementor-widget-wrap">
                          <div
                            class="
                              elementor-element
                              elementor-element-613dfc53
                              elementor-widget
                              elementor-widget-elementskit-heading
                            "
                            data-id="613dfc53"
                            data-element_type="widget"
                            data-widget_type="elementskit-heading.default"
                          >
                            <div class="elementor-widget-container">
                              <div class="ekit-wid-con">
                                <div
                                  class="
                                    ekit-heading
                                    elementskit-section-title-wraper
                                    center
                                    ekit_heading_tablet- ekit_heading_mobile-
                                  "
                                >
                                  <h2
                                    class="
                                      ekit-heading--title
                                      elementskit-section-title
                                    "
                                  >
                                    {{ payload.title }}
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section
                class="
                  elementor-section
                  elementor-inner-section
                  elementor-element
                  elementor-element-7b665bac
                  elementor-section-boxed
                  elementor-section-height-default
                  elementor-section-height-default
                "
                data-id="7b665bac"
                data-element_type="section"
              >
                <div class="elementor-container elementor-column-gap-extended">
                  <div
                    class="elementor-row"
                    v-for="(item, index) in payload.data"
                    :key="index"
                  >
                    <div
                      class="
                        elementor-column
                        elementor-col-25
                        elementor-inner-column
                        elementor-element
                        elementor-element-30cca61b
                      "
                      data-id="30cca61b"
                      data-element_type="column"
                    >
                      <div
                        class="
                          elementor-column-wrap elementor-element-populated
                        "
                      >
                        <div class="elementor-widget-wrap">
                          <div
                            class="
                              elementor-element
                              elementor-element-76d43fa8
                              elementor-view-default
                              elementor-position-top
                              elementor-vertical-align-top
                              elementor-widget
                              elementor-widget-icon-box
                            "
                            data-id="76d43fa8"
                            data-element_type="widget"
                            data-widget_type="icon-box.default"
                          >
                            <div class="elementor-widget-container">
                              <div class="elementor-icon-box-wrapper">
                                <div class="elementor-icon-box-icon">
                                  <NuxtLink
                                    class="elementor-icon elementor-animation-"
                                    :to="item.link"
                                  >
                                    <img
                                      class="elementor-animation-grow"
                                      :src="item.image"
                                      :alt="item.title"
                                    />
                                  </NuxtLink>
                                </div>
                                <div class="elementor-icon-box-content">
                                  <h3 class="elementor-icon-box-title">
                                    <NuxtLink :to="item.link">
                                      {{ item.title }}
                                    </NuxtLink>
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["payload"],
};
</script>
