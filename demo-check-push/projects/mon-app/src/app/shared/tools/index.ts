export const highlight = (el: any, className='checked') => {
  const a = el.nativeElement.querySelector('a');
  a.classList.add(className);

  setTimeout(() => {
      a.classList.remove(className);
  }, 1000);

  console.info('highlight', el);
}
