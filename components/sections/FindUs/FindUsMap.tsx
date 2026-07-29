export default function FindUsMap() {
  return (
    <div className="h-[350px] overflow-hidden rounded-3xl border border-[#E8D5BE] bg-white shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d979.6085870772949!2d122.5089108119937!3d10.854531311230382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af029c6e026a25%3A0x8d8a8d2c35c8f5aa!2sKaren's%20Bakeshop!5e0!3m2!1sen!2sph!4v1785306645329!5m2!1sen!2sph"
        className="h-full w-full border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        title="Karen's Bakeshop Location"
      />
    </div>
  );
}