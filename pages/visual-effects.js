import Page from "../components/styled/Page";

const VisualEffects = () => {
  return (
    <Page>
      <iframe
        src="https://player.vimeo.com/video/481717542"
        width="640"
        height="360"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Page>
  );
};

export default VisualEffects;
