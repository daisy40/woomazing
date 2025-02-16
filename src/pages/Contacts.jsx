import Wrapper from "components/Wrapper.jsx";
import BaseButton from "components/BaseButton.jsx";

function Contacts() {
  return (
    <>
      <Wrapper>
        <div className="h-[464px] relative">
          <div className="top-[269px] absolute flex flex-col justify-between h-[111px] ml-[3px]">
            <h1>Контакты</h1>
            <div className="flex">
              <span>Главная</span>
              <span>&nbsp;—&nbsp;</span>
              <span>Контакты</span>
            </div>
          </div>
        </div>
        <div className="h-[1512px] flex flex-col gap-[130px] mt-[130px]">
          <iframe className="w-full h-[476px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.0538458722704!2d37.52950687710252!3d55.68805159697638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54cf681cd88db%3A0x2a3fadda3df86f1b!2z0YPQuy4g0KHRgtGA0L7QuNGC0LXQu9C10LksIDI1LCDQnNC-0YHQutCy0LAsIDExOTMxMQ!5e0!3m2!1sru!2sru!4v1738157507549!5m2!1sru!2sru" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          <div className="w-[943px] h-[71px] flex justify-between">
            <div className="flex flex-col justify-between">
              <p>Телефон</p>
              <h4>+7 (495) 823-54-12</h4>
            </div>
            <div className="flex flex-col justify-between">
              <p>E-mail</p>
              <h4>info@sitename.com</h4>
            </div>
            <div className="flex flex-col justify-between">
              <p>Адрес</p>
              <h4>г. Москва, 3-я улица Строителей, 25</h4>
            </div>
          </div>
          <div className="w-[443px] h-[705px] flex flex-col justify-between">
            <h3>Напишите нам</h3>
            <form className="flex flex-col gap-[35px]">
              <input required id="name" name="name" placeholder="Имя" autoComplete="on"></input>
              <input required id="email" name="email" type="email" placeholder="E-mail" autoComplete="on"></input>
              <input required id="phone" name="phone" type="tel" placeholder="Телефон" autoComplete="on"></input>
              <textarea required id="message" name="message" placeholder="Сообщение"></textarea>
              <BaseButton>Отправить</BaseButton>
            </form>
          </div>
        </div>
      </Wrapper>
    </>
  )
}

export { Contacts }