import { useState } from 'react';
import SectionHeader from '@/components/SectionHeader';
import emailjs from '@emailjs/browser';
import { EMAILJS } from '@/data/siteData';


const PERKS = [
  'Free personalised itinerary planning',
  '24/7 dedicated travel support',
  'Best price guarantee on all packages',
  'Flexible booking & cancellation policy',
];

const INITIAL = { name: '', email: '', phone: '', dest: '', message: '' };



function validate(form) {
  const errors = {};
  if (!form.name.trim())
    errors.name = 'Name is required';
  if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = 'A valid email is required';
  if (!form.phone.trim() || form.phone.replace(/\D/g, '').length < 10)
    errors.phone = 'A valid 10-digit phone number is required';
  if (!form.message.trim() || form.message.length < 10)
    errors.message = 'Please provide a few more details (min 10 characters)';
  return errors;
}

export default function Enquiry() {
  const [form,    setForm]    = useState(INITIAL);
  const [errors,  setErrors]  = useState({});
  const [loading, setLoading] = useState(false);
  const [sent,    setSent]    = useState(false);
  const [submittedName, setSubmittedName] = useState('');

  const change = (key, value) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => { const n = { ...e }; delete n[key]; return n; });
  };

const submit = async () => {
  if (loading) return;

  const errs = validate(form);
  if (Object.keys(errs).length) {
    setErrors(errs);
    return;
  }

  setErrors({});
  setLoading(true);

  try {
    // 1️ Send to OWNER
    await emailjs.send(
      EMAILJS.serviceId,
      EMAILJS.templateId,  // user template
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        destination: form.dest || 'Not provided',
        message: form.message,
      },
      EMAILJS.publicKey
    );
    // 1️ Send to User
    await emailjs.send(
      EMAILJS.serviceId,
      EMAILJS.userTemplateId, // user template
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        destination: form.dest || 'Not provided',
        message: form.message,
      },
      EMAILJS.publicKey
    );

    setSubmittedName(form.name);
    setSent(true);

    setTimeout(() => {
      setSent(false);
      setSubmittedName('');
    }, 6000);

    setForm(INITIAL);

  } catch (err) {
    console.error('EmailJS Error:', err);
    alert('Failed to send enquiry. Try again.');
  } finally {
    setLoading(false);
  }
};

  return (
    <section id="enquiry">
      {/* Top wave (Reviews → dark bg) */}
    
      <div
        style={{
          background: 'linear-gradient(135deg, #001e3c 0%, #0a3d6b 50%, #0077b6 100%)',
          padding:    '5rem 0 7rem',
          position:   'relative',
          borderRadius: '15px',
          marginBottom: '5rem',
        }}
      >
        {/* Subtle dot pattern */}
        <div
          aria-hidden="true"
          style={{
            position:   'absolute',
            inset:       0,
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
            pointerEvents: 'none',
          }}
        />

        <div
          className="container"
          style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem', position: 'relative' }}
        >
          <div
            style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap:                 '5rem',
              alignItems:          'center',
            }}
          >
            {/* ── Left copy ── */}
            <div className="fade-section">
              <SectionHeader
                label="Plan Your Trip"
                title={<>Let Us Create Your<br /><em style={{ fontStyle:'italic', color:'#a8d8f0' }}>Perfect Kerala Journey</em></>}
                light
              />
              <p style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 300, lineHeight: 1.8, margin: '1.2rem 0 2rem' }}>
                Fill in your details and our travel experts will craft a personalised
                itinerary just for you — no obligations, completely free.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                {PERKS.map((p) => (
                  <div key={p} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.85)', fontSize: '0.88rem' }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#00b4d8', flexShrink: 0 }} />
                    {p}
                  </div>
                ))}
              </div>
            </div>

            {/* ── Form card ── */}
            <div
              className="fade-section"
              style={{
                background:           'rgba(255,255,255,0.07)',
                backdropFilter:       'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border:               '1px solid rgba(255,255,255,0.15)',
                borderRadius:         '24px',
                padding:              '2.5rem',
              }}
            >
              {sent ? (
                <SuccessState name={submittedName} />
              ) : (
                <FormBody form={form} errors={errors} loading={loading} onChange={change} onSubmit={submit} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Success state ──────────────────────────────────────────── */
function SuccessState({ name }) {
  const first = name.split(' ')[0];
  return (
    <div style={{ textAlign: 'center', padding: '2rem 0' }}>
      <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
      <h3
        style={{
          fontFamily:   '"Cormorant Garamond", serif',
          fontSize:     '1.7rem',
          color:        'white',
          fontWeight:    400,
          marginBottom: '0.75rem',
        }}
      >
        Thank you, {first}!
      </h3>
      <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', fontWeight: 300, lineHeight: 1.7 }}>
        Our team will reach out within 24 hours with your personalised Kerala itinerary.
      </p>
    </div>
  );
}

/* ── Form body ──────────────────────────────────────────────── */
function FormBody({ form, errors, loading, onChange, onSubmit }) {
  return (
    <>
      <p
        style={{
          fontFamily:   '"Cormorant Garamond", serif',
          fontSize:     '1.4rem',
          color:        'white',
          marginBottom: '1.6rem',
          fontWeight:    400,
        }}
      >
        Send Us an Enquiry
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <Field label="Your Name"   type="text"  placeholder="John Doe"            value={form.name}    error={errors.name}    onChange={v => onChange('name',    v)} />
        <Field label="Email"       type="email" placeholder="john@email.com"       value={form.email}   error={errors.email}   onChange={v => onChange('email',   v)} />
        <Field label="Phone"       type="tel"   placeholder="+91 98765 43210"      value={form.phone}   error={errors.phone}   onChange={v => onChange('phone',   v)} />
        <Field label="Destination" type="text"  placeholder="e.g. Munnar, Alleppey" value={form.dest}  onChange={v => onChange('dest',    v)} />
        <Field
          label="Your Message"
          type="textarea"
          placeholder="Travel dates, group size, special requirements…"
          value={form.message}
          error={errors.message}
          onChange={v => onChange('message', v)}
          full
        />
      </div>

      <button
      type="button"
        onClick={onSubmit}
        disabled={loading}
        style={{
          width:         '100%',
          marginTop:     '1rem',
          background:    loading ? '#0090b0' : '#00b4d8',
          color:         'white',
          padding:       '1rem',
          borderRadius:  '12px',
          fontSize:      '0.95rem',
          fontWeight:     600,
          letterSpacing: '0.06em',
          border:        'none',
          cursor:         loading ? 'not-allowed' : 'pointer',
          transition:    'all 0.3s',
        }}
      >
        {loading ? 'Sending…' : '✈  Send Enquiry'}
      </button>
    </>
  );
}

/* ── Reusable field ─────────────────────────────────────────── */
function Field({ label, type, placeholder, value, error, onChange, full }) {
  const sharedStyle = {
    background:   'rgba(255,255,255,0.08)',
    border:       `1.5px solid ${error ? '#ff6b6b' : 'rgba(255,255,255,0.15)'}`,
    borderRadius: '10px',
    padding:      '0.72rem 1rem',
    color:        'white',
    fontSize:     '0.9rem',
    width:        '100%',
    outline:      'none',
    fontFamily:   'inherit',
    transition:   'border-color 0.2s, background 0.2s',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', gridColumn: full ? '1 / -1' : undefined }}>
      <label style={{ fontSize: '0.72rem', fontWeight: 500, color: 'rgba(255,255,255,0.65)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        {label}
      </label>

      {type === 'textarea' ? (
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
          rows={4}
          style={{ ...sharedStyle, resize: 'vertical', minHeight: '100px' }}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
          style={sharedStyle}
        />
      )}

      {error && (
        <span style={{ fontSize: '0.7rem', color: '#ff9a9a' }}>{error}</span>
      )}
    </div>
  );
}
