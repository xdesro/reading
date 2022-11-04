<template>
  <nav class="layout-controls">
    <button
      class="layout-controls__button layout-controls__button--active"
      id="set-filmstrip"
      data-layout="filmstrip"
    >
      <span class="visually-hidden">Filmstrip layout</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M24 6h-9.6V2.4h-3.6V0H3.6v2.4H0V24h14.4v-3.6H24V6ZM9.6 10.8V8.4H12v2.4H9.6Zm2.4 4.8V18H9.6v-2.4H12Zm4.8 2.4h-2.4v-2.4h2.4V18Zm0-7.2h-2.4V8.4h2.4v2.4Zm4.8 7.2h-2.4v-2.4h2.4V18Zm0-7.2h-2.4V8.4h2.4v2.4Z"
        />
      </svg>
    </button>
    <button class="layout-controls__button" id="set-grid" data-layout="grid">
      <span class="visually-hidden">Grid layout</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M.571 0A.573.573 0 0 0 0 .571v4.572h5.143V0H.57Zm5.715 0v5.143h5.143V0H6.286Zm6.285 0v5.143h5.143V0h-5.143Zm6.286 0v5.143H24V.57A.573.573 0 0 0 23.429 0h-4.572ZM0 6.286v5.143h5.143V6.286H0Zm6.286 0v5.143h5.143V6.286H6.286Zm6.285 0v5.143h5.143V6.286h-5.143Zm6.286 0v5.143H24V6.286h-5.143ZM0 12.57v5.143h5.143v-5.143H0Zm6.286 0v5.143h5.143v-5.143H6.286Zm6.285 0v5.143h5.143v-5.143h-5.143Zm6.286 0v5.143H24v-5.143h-5.143ZM0 18.857v4.572c0 .314.257.571.571.571h4.572v-5.143H0Zm6.286 0V24h5.143v-5.143H6.286Zm6.285 0V24h5.143v-5.143h-5.143Zm6.286 0V24h4.572a.573.573 0 0 0 .571-.571v-4.572h-5.143Z"
        />
      </svg>
    </button>
  </nav>
</template>
