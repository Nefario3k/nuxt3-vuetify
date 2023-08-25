<template>
  <div>
    <v-dialog
      overlay-color="var(--scrim)"
      :overlay-opacity="1"
      :persistent="persistent"
      :max-width="926"
      v-model="showModal"
      :width="width"
    >
      <v-card color="var(--text-dark)" class="modal_box">
        <div class="d-flex align-center w-100 h-100 justify-content-center">
          <div class="modal__content full__screen_template">
            <ModalClose @closeModal="closeAll" />
            <div class="content__wrapper">
              <!--===================== preview  =====================-->
              <div class="left__side">
                <h3>Add New Template</h3>
                <p class="label my-2">Preview</p>
                <!--===================== Web  =====================-->
                <template>
                  <div class="img_container">
                    <div class="text-center">
                      <div><SvgImageCover /></div>
                      <p class="img_label">Cover image here</p>
                    </div>
                  </div>
                  <p class="label mt-2 mb-10">Web Thumbnail</p>
                </template>
                <!--===================== mobile  =====================-->
                <template>
                  <div class="img_container mobile">
                    <div class="text-center">
                      <div><SvgImageCover /></div>
                      <p class="img_label">Cover image here</p>
                    </div>
                  </div>
                  <p class="label mt-2">Mobile Thumbnail</p>
                </template>
              </div>
              <!--===================== form  =====================-->
              <div class="right__side">
                <form class="row">
                  <!-- Template Name  -->
                  <div class="col-12 pb-1">
                    <label for="create_temp_name" class="input_label"
                      >Template Name</label
                    >
                    <input
                      type="text"
                      required
                      class="form-control input_field"
                      id="create_temp_name"
                      placeholder="Enter card name here"
                    />
                  </div>
                  <!-- Select Category  -->
                  <div class="col-12 pb-1">
                    <label for="create_temp_category" class="input_label"
                      >Select Category</label
                    >
                    <select
                      class="form-control select_field"
                      id="create_temp_category"
                      value="Personal"
                    >
                      <option value="Personal">Personal</option>
                      <option value="User needs some milk">
                        User needs some milk
                      </option>
                      <option value="Personal">Personal</option>
                    </select>
                  </div>
                  <!-- Preview Card  -->
                  <div class="col-12 pb-1">
                    <label for="create_temp_card_preview" class="input_label"
                      >Preview Card</label
                    >
                    <select
                      class="form-control select_field"
                      id="create_temp_card_preview"
                      value="Select Preview Card"
                    >
                      <option value="Select Preview Card">
                        Select Preview Card
                      </option>
                      <option value="User needs some milk">
                        User needs some milk
                      </option>
                      <option value="Personal">Personal</option>
                    </select>
                  </div>
                  <!-- Status  -->
                  <div class="col-6 pb-1">
                    <label for="create_temp_status" class="input_label"
                      >Status</label
                    >
                    <select
                      class="form-control select_field"
                      id="create_temp_status"
                      value="Inactive"
                    >
                      <option value="Inactive">Inactive</option>
                      <option value="User needs some milk">
                        User needs some milk
                      </option>
                      <option value="Personal">Personal</option>
                    </select>
                  </div>
                  <!-- Plan  -->
                  <div class="col-6 pb-1">
                    <label for="create_temp_Plan" class="input_label"
                      >Plan</label
                    >
                    <select
                      class="form-control select_field"
                      id="create_temp_Plan"
                      value="Free"
                    >
                      <option value="Free">Free</option>
                      <option value="User needs some milk">
                        User needs some milk
                      </option>
                      <option value="Personal">Personal</option>
                    </select>
                  </div>
                  <!-- Custom Template  -->
                  <div class="col-12">
                    <v-switch
                      class="mt-0 ms-2"
                      inset
                      :ripple="false"
                      hide-details
                      color="var(--primary-color)"
                      label="Custom Template"
                    ></v-switch>
                  </div>
                  <!-- Web Thumbnail  -->
                  <div class="col-12 pb-1">
                    <label for="" class="input_label">Web Thumbnail</label>
                    <div class="drag_drop_container">
                      <div class="drop_content">
                        <SvgImageUpload />
                        <p><span>Click to Upload</span> or Drag and drop</p>
                        <p class="label">Maximum file size 2MB</p>
                      </div>
                    </div>
                  </div>
                  <!-- Mobile Thumbnail  -->
                  <div class="col-12 pb-1">
                    <label for="" class="input_label">Mobile Thumbnail</label>
                    <div class="drag_drop_container">
                      <div class="drop_content">
                        <p><span>Click to Upload</span> or Drag and drop</p>
                        <p class="label">Maximum file size 2MB</p>
                      </div>
                    </div>
                  </div>
                  <!-- Custom Colour  -->
                  <div class="col-12">
                    <div class="color_label">
                      <label for="" class="input_label">Custom Colour</label>
                      <v-menu
                        v-model="menuModel"
                        nudge-left="90%"
                        open-on-hover
                        close-delay="100"
                        :close-on-content-click="closeOnContent"
                        min-width="280"
                        max-width="280"
                        :nudge-bottom="5"
                        offset-y
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <button
                            :class="{ active: menuModel }"
                            v-bind="attrs"
                            v-on="on"
                            type="button"
                          >
                            <span></span>
                            <SvgAngleDown />
                          </button>
                        </template>
                        <v-list class="dropdown__list">
                          <!-- control -->
                          <v-list-item
                            style="padding-top: 12px"
                            class="dropdown__list-item noHover color__selector"
                          >
                            <div class="pb-5">
                              <p>Select a Colour</p>
                              <div class="color_row">
                                <!--====================== colors  ======================-->
                                <div
                                  v-for="(items, index) in color_types"
                                  :key="items.color + index"
                                  class=""
                                >
                                  <button
                                    @click="setTempColor(items)"
                                    type="button"
                                    :style="{ color: items.color }"
                                    :class="`color_selected ${
                                      items.color === temp_color
                                        ? 'selected'
                                        : ''
                                    }`"
                                  >
                                    <span></span>
                                  </button>
                                </div>
                                <!--=================== color picker  ===================-->
                                <div class="">
                                  <button
                                    @click="chooseColor"
                                    type="button"
                                    class="color_selected noHover"
                                  >
                                    <SvgPlus />
                                  </button>
                                </div>
                              </div>
                              <input
                                v-model="selected_color"
                                style="opacity: 0; height: 0; width: 0"
                                type="color"
                                ref="colorInput"
                                name=""
                                id=""
                                @change="setNewColor"
                              />
                            </div>
                          </v-list-item>
                        </v-list>
                      </v-menu>
                    </div>
                  </div>
                  <!-- submit  -->
                  <div class="col-12 mb-5">
                    <Button
                      @action="$emit('showInfo', info)"
                      type="button"
                      :elevation="1"
                      height="5rem"
                      width="100%"
                      color="var(--primary-color)"
                      text="Create Template"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      width: "100%",
      persistent: false,
      menuModel: false,
      closeOnContent: false,
      color_types: [
        {
          color: "#0062FF",
        },
        {
          color: "#FF993A",
        },
        {
          color: "##FFFFFF80",
        },
        {
          color: "#ACACBE",
        },
        {
          color: "#2A5F9E",
        },
      ],
      selected_color: null,
      temp_color: "#0062FF",
      info: {
        head: "Successful",
        sub: "Your template has been created successfully",
      },
    };
  },
  methods: {
    refresh() {},
    showDialogue() {
      this.showModal = true;
    },
    closeAll() {
      this.showModal = false;
    },
    chooseColor() {
      this.$refs.colorInput.click();
    },

    setTempColor(item) {
      this.temp_color = item.color;
    },
    setNewColor() {
      this.temp_color = structuredClone(this.selected_color);
      this.color_types.push({
        color: this.temp_color,
      });
      this.selected_color = null;
    },
  },
};
</script>