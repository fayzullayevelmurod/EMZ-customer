window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const avatar = document.querySelector('.avatar-box');
  const avatarOption = document.querySelector('.avatar-option');

  avatar.addEventListener('click', (e) => {
    e.stopPropagation();
    avatarOption.classList.remove('hidden');
  });
  window.addEventListener('click', () => {
    avatarOption.classList.add('hidden');
  });

  // tabs
  try {
    const tabs = document.querySelectorAll('.tab-item');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs[0].classList.add('active');
    tabContents[0].classList.add('active');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-tab');
        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        tab.classList.add('active');
        document.querySelector(`.tab-content[data-tab="${target}"]`).classList.add('active');
      });
    });
  } catch (error) {
  }

  // sort btn
  try {
    document.querySelectorAll('.sort-box').forEach(sortBox => {
      const sortBtn = sortBox.querySelector('.sort-btn');
      const sortOptionsContainer = sortBox.querySelector('.sort-options');
      const sortOptions = sortBox.querySelectorAll('.sort-option');

      // Sort button bosilganda menyuni ochish/yopish
      sortBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        // Boshqa ochiq dropdownlarni yopish
        document.querySelectorAll('.sort-options').forEach(option => {
          if (option !== sortOptionsContainer) {
            option.classList.add('opacity-0');
            option.classList.add('invisible');
          }
        });
        // Hozirgi dropdownni ko'rinadigan qilib ochish/yopish
        sortOptionsContainer.classList.toggle('opacity-0');
        sortOptionsContainer.classList.toggle('invisible');
      });

      // Har bir option uchun hodisani sozlash
      sortOptions.forEach(option => {
        option.addEventListener('click', () => {
          // Barcha optionlarni reset qilish
          sortOptions.forEach(opt => {
            opt.querySelector('.sort-option__img')?.classList.add('opacity-0');
            opt.querySelector('.sort-option__img')?.classList.add('invisible');
            opt.querySelector('.sort-option__text')?.classList.remove('font-bold');
            opt.querySelector('.sort-option__text')?.classList.add('font-medium');
          });

          // Tanlangan optionni ajratib ko'rsatish
          option.querySelector('.sort-option__img')?.classList.remove('opacity-0');
          option.querySelector('.sort-option__img')?.classList.remove('invisible');
          option.querySelector('.sort-option__text')?.classList.remove('font-medium');
          option.querySelector('.sort-option__text')?.classList.add('font-bold');
        });
      });

      // Boshqa joyni bosganda menyuni yopish
      window.addEventListener('click', () => {
        if (!sortOptionsContainer.classList.contains('opacity-0')) {
          sortOptionsContainer.classList.add('opacity-0');
          sortOptionsContainer.classList.add('invisible');
        }
      });
    });
  } catch (error) {
  }
})



// modal
try {
  function handleRowClick(event) {
    if (!event.target.dataset.action) {
      window.location.href = '#!';
    }
  }

  // Selectors
  const openButtons = document.querySelectorAll('.open-modal');
  const closeButtons = document.querySelectorAll('[data-modal-close]');

  // Open modal
  openButtons.forEach((btn) => {

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const modalId = btn.getAttribute('data-modal-target');
      const modal = document.querySelector(modalId);

      if (modal) {
        showModal(modal);
      }
    });
  });

  // Close modal
  closeButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal');
      if (modal) {
        hideModal(modal);
      }
    });
  });


  // Functions
  function showModal(modal) {
    modal.classList.add('show');
  }

  function hideModal(modal) {
    modal.classList.remove('show');
  }

  // Close modal on outside click
  window.addEventListener('click', (e) => {
    const openModal = document.querySelector('.modal.show');
    if (openModal && !e.target.closest('.modal-content') && !e.target.closest('.open-modal')) {
      hideModal(openModal);
    }
  });
} catch (error) {
  console.log('Modal', error);
}


try {
  document.querySelectorAll('.select-container').forEach(container => {
    const input = container.querySelector('.select-input');
    const dropdown = container.querySelector('.select-dropdown');
    const options = container.querySelectorAll('.select-option');
    const arrowDown = container.querySelector('.arrow-down');

    // Dropdownni ochish/yopish
    input.addEventListener('click', (e) => {
      e.stopPropagation(); // Ota elementga hodisani uzatishni to'xtatadi
      document.querySelectorAll('.select-dropdown').forEach(d => {
        if (d !== dropdown) {
          d.classList.add('hidden');
          arrowDown.classList.remove('rotate-180');
        } // Boshqa dropdownlarni yopish
      });
      if (dropdown) {
        dropdown.classList.toggle('hidden'); // Joriy dropdownni ochish/yopish
      }
      arrowDown.classList.toggle('rotate-180');
    });

    // Optionni tanlash
    options.forEach(option => {
      option.addEventListener('click', () => {
        input.value = option.textContent; // Tanlangan qiymatni inputga o‘tkazish
        dropdown.classList.add('hidden'); // Dropdownni yopish
        arrowDown.classList.remove('rotate-180');
      });
    });

    // Tashqi joyni bosganda dropdownni yopish
    window.addEventListener('click', () => {
      if (dropdown) {
        dropdown.classList.add('hidden');
      }
      arrowDown.classList.remove('rotate-180');
    });
  });
} catch (error) {

}

try {
  document.querySelectorAll('.dropdown-container').forEach(dropdown => {
    const button = dropdown.querySelector('.dropdown-button'); // Dropdown tugmasi
    const menu = dropdown.querySelector('.dropdown-menu'); // Dropdown menyusi
    const options = dropdown.querySelectorAll('.dropdown-option'); // Dropdown variantlari
    const arrow = button.querySelector('img'); // Arrow tasviri (img)

    // Dropdownni ochish yoki yopish
    button.addEventListener('click', (event) => {
      event.stopPropagation(); // Hodisani yuqoriga uzatishni to'xtatadi
      document.querySelectorAll('.dropdown-menu').forEach(openMenu => {
        if (openMenu !== menu) openMenu.classList.add('hidden'); // Boshqa dropdownlarni yopish
      });
      if (arrow) { // Agar arrow mavjud bo‘lsa, rotate-180 ni boshqaradi
        document.querySelectorAll('.dropdown-button img').forEach(otherArrow => {
          if (otherArrow !== arrow) otherArrow.classList.remove('rotate-180'); // Boshqa tasvirlardan rotate-180 ni o'chirish
        });
        arrow.classList.toggle('rotate-180'); // Tasvirni aylantirish yoki asl holatiga qaytarish
      }
      menu.classList.toggle('hidden'); // Joriy dropdownni ochish yoki yopish
    });

    // Optionni tanlash
    options.forEach(option => {
      option.addEventListener('click', () => {
        const selectedText = option.textContent.trim();
        button.querySelector('span').textContent = selectedText; // Tanlangan variantni tugmaga o‘tkazish
        options.forEach(item => item.classList.remove('bg-[#F6F6F6]'));
        option.classList.add('bg-[#F6F6F6]');
        menu.classList.add('hidden'); // Dropdownni yopish
        if (arrow) arrow.classList.remove('rotate-180'); // Tasvirni asl holatiga qaytarish
      });
    });
  });

  // Tashqi joyni bosganda barcha dropdownlarni yopish
  window.addEventListener('click', () => {
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
      menu.classList.add('hidden');
    });
    document.querySelectorAll('.dropdown-button img').forEach(arrow => {
      arrow.classList.remove('rotate-180');
    });
  });
} catch (error) {

}

// toggle
try {
  const toggles = document.querySelectorAll('.toggle');
  toggles.forEach(toggleItem => {
    const toggleText = toggleItem.querySelector('.toggle-text');
    toggleItem.addEventListener('click', () => {
      toggleItem.classList.toggle('toggled');
      if (toggleText) {
        if (toggleText.textContent === 'Не опубликовано') {
          toggleText.textContent = 'опубликовано'
        } else {
          toggleText.textContent = 'Не опубликовано'
        }
      }
    });
  });
  console.log(toggles);

} catch (error) {
  console.log('Toggle', error);
}

try {
  document.querySelectorAll('.dropdown').forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle'); // Tugmani tanlash
    const menu = dropdown.querySelector('.dropdown-menu'); // Menyu
    const items = menu.querySelectorAll('.dropdown-item'); // Barcha dropdown itemlari

    // Dropdownni ochish/yopish
    toggle.addEventListener('click', (event) => {
      event.stopPropagation(); // Hodisani yuqoriga uzatishni to'xtatadi
      document.querySelectorAll('.dropdown-menu').forEach(openMenu => {
        if (openMenu !== menu) openMenu.classList.add('hidden'); // Boshqa dropdownlarni yopish
      });
      menu.classList.toggle('hidden'); // Joriy menyuni ochish yoki yopish
    });

    // Optionlar bilan ishlash
    items.forEach(item => {
      item.addEventListener('click', () => {
        // Barcha itemlarning img elementlarini reset qilish
        items.forEach(resetItem => {
          const img = resetItem.querySelector('img');
          if (img) img.classList.add('opacity-0'); // Barcha img'larni yashirish
        });

        // Tanlangan itemning img elementidan opacity-0 ni olib tashlash
        const img = item.querySelector('img');
        if (img) img.classList.remove('opacity-0');

        menu.classList.add('hidden'); // Dropdownni yopish
        console.log(`${item.textContent.trim()} tanlandi`); // Tanlangan qiymatni console'ga chiqarish
      });
    });
  });

  // Tashqi joyni bosganda barcha dropdownlarni yopish
  window.addEventListener('click', () => {
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
      menu.classList.add('hidden');
    });
  });
} catch (error) {

}

try {
  document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.custom-tab'); // Barcha tablarni tanlash
    const contents = document.querySelectorAll('.custom-tab-content'); // Barcha kontentlarni tanlash

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetId = tab.dataset.tab; // Tabning maqsadli kontent ID sini olish

        // Barcha tablardan 'active-tab' sinfini olib tashlash
        tabs.forEach(t => t.classList.remove('active-tab'));

        // Hozirgi tabga 'active-tab' sinfini qo'shish
        tab.classList.add('active-tab');

        // Barcha kontentlardan 'active-content' ni olib tashlash
        contents.forEach(content => content.classList.remove('active-content'));

        // Maqsadli kontentga 'active-content' sinfini qo'shish
        document.getElementById(targetId).classList.add('active-content');
      });
    });
  });
} catch (error) {

}
try {
  const toggleButton = document.querySelector('.toggle-additional'); // "Дополнительные поля" uchun container
  const additionalSection = document.querySelector('.additional-section'); // "additional-section" bo'limi
  const toggleIcon = document.querySelector('.toggle-icon');

  toggleButton.addEventListener('click', () => {
    // Additional sectionni block qilish/yashirish
    additionalSection.classList.toggle('hidden');
    additionalSection.classList.toggle('block');

    // SVG tasvirga rotate-180 qo‘shish/yopish
    if (toggleIcon) {
      toggleIcon.classList.toggle('rotate-180');
    }
  });
} catch (error) {

}

try {
  const clicerContainers = document.querySelectorAll('.clicer-container');

  clicerContainers.forEach(item => {
    const clickerBtn = item.querySelector('.clicer-btn');
    const clicerDropdown = item.querySelector('.clicker-dropdown');

    // Dropdownni ochish/toggle qilish
    clickerBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Hodisani yuqoriga yubormaslik

      // Boshqa dropdownlarni yopish
      clicerContainers.forEach(otherItem => {
        const otherDropdown = otherItem.querySelector('.clicker-dropdown');
        if (otherDropdown !== clicerDropdown) {
          otherDropdown.classList.add('el-hidden');
        }
      });

      // Joriy dropdownni toggle qilish
      clicerDropdown.classList.toggle('el-hidden');
    });
  });

  // Tashqi joyni bosganda barcha dropdownlarni yopish
  window.addEventListener('click', () => {
    clicerContainers.forEach(item => {
      const dropdown = item.querySelector('.clicker-dropdown');
      dropdown.classList.add('el-hidden');
    });
  });
} catch (error) {
  console.log(error);

}

try {
  const contentTabItem = document.querySelector('.content-tab__item');
  document.querySelectorAll('.tab-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelector('.content-show__btn').classList.add('hidden');

      if (item.classList.contains('content-tab__item')) {
        document.querySelector('.content-show__btn').classList.remove('hidden');
      }
    })
  })
} catch (error) {

}
