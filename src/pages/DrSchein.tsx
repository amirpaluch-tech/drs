export default function DrSchein() {
  return (
    <div style={{ minHeight: '100vh', background: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <iframe
        src="https://shcein.rapid-image.net/patient-login"
        width="500"
        height="600"
        title="פורטל לקוחות"
        style={{ border: 'none', borderRadius: '8px' }}
      />
    </div>
  )
}
