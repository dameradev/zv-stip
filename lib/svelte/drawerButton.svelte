
<script>

  let isOpen = false;
  let prop;

  console.log(prop)

  export let placement = 'right-0'; // By default, Drawer opens from right. Use 'left-0' for opening from left.
  export let maxScreenSize = 'max-w-lg'; // Max size of content section.

  // Toggle function for Drawer.
  const handleToggle = () => {
    isOpen = !isOpen;
  };

  // Handles click-away action.
  const handleClickAway = () => {
    isOpen = !isOpen;
  };

  
  // // Function to lock scroll on the body when Drawer is open.
  // function scrollLock(isOpen) {
  //   const body = document.querySelector('body');
  //   if (body) {
  //     body.style.overflow = isOpen ? 'hidden' : 'auto';
  //   }
  // }

  // Automatically run scrollLock whenever isOpen changes.
  // $: scrollLock(isOpen);
  
  // Output the state to the console whenever isOpen changes.
</script>


<div class="flex">
  <div class="m-auto">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-8 w-8 cursor-pointer duration-100 hover:scale-110"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
      on:click={handleToggle}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  </div>
</div>

<aside class="">
  <div
    class={`fixed inset-0 w-full h-full z-50 overflow-hidden ${isOpen ? 'visible' : 'invisible'}`}
  >
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class={`w-screen h-full cursor-pointer duration-500 transition-opacity overflow-hidden ${isOpen ? 'opacity-50' : 'opacity-0'}`}
      on:click={handleClickAway}
    />
    <div
      class={`absolute ${placement} top-0 shadow-xl overflow-y-auto bg-white transition-all duration-300 h-full ${maxScreenSize} ${isOpen ? 'w-screen' : 'w-0'}`}
    >
      <slot />
    </div>
  </div>
</aside>
