export default function GoogleFormEmbed({ formUrl }) {
    return (
      <iframe
        src={formUrl}
        width="100%"
        height="500px"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        style={{ border: 'none' }}
        allowFullScreen
      ></iframe>
    );
  }
  