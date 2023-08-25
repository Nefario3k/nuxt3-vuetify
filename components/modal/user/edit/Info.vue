<template>
  <div>
    <v-dialog
      overlay-color="var(--scrim)"
      :overlay-opacity="1"
      @click:outside="closeAll(0)"
      :persistent="persistent"
      :max-width="478"
      v-model="showModal"
      :width="width"
    >
      <v-card color="var(--text-dark)" class="modal_box">
        <div class="d-flex align-center w-100 h-100 justify-content-center">
          <div class="modal__content text-center">
            <ModalClose @closeModal="closeAll(0)" />
            <div class="mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="32"
                viewBox="0 0 33 32"
                fill="none"
              >
                <path
                  d="M19.7534 25.3993L21.7801 27.426L25.8334 23.3727M16.4867 29.0793C14.0601 29.0793 11.6467 28.466 9.80672 27.2393C6.58005 25.0793 6.58005 21.5593 9.80672 19.4127C13.4734 16.9593 19.4867 16.9593 23.1534 19.4127M16.7134 14.4927C16.5801 14.4793 16.4201 14.4793 16.2734 14.4927C14.743 14.4407 13.2929 13.7951 12.2302 12.6926C11.1675 11.5901 10.5757 10.1173 10.5801 8.58602C10.5779 7.80912 10.7292 7.03945 11.0251 6.32112C11.321 5.60279 11.7558 4.94993 12.3046 4.39997C12.8533 3.85 13.5052 3.41374 14.2228 3.11619C14.9405 2.81864 15.7098 2.66566 16.4867 2.66602C19.7534 2.66602 22.4067 5.31935 22.4067 8.58602C22.4067 11.786 19.8734 14.386 16.7134 14.4927Z"
                  stroke="#FF993A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <h3>Edit Successful</h3>
            <p class="sub_text">User information successfully updated</p>
            <div class="button_area">
              <Button
                @action="closeAll(0)"
                :outlined="true"
                height="5rem"
                width="100%"
                textColor="var(--primary-color)"
                color="var(--primary-color)"
                text="Close"
              />
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
    };
  },
  methods: {
    refresh() {},
    showDialogue() {
      this.showModal = true;
    },
    closeAll(val) {
      this.showModal = false;
      this.$emit("closePanel", val);
    },
  },
};
</script>