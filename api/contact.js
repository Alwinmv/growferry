// Vercel serverless function: receives the contact form and emails it via Resend.
// Needs the environment variable RESEND_API_KEY (Vercel -> Settings -> Environment Variables).
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Method not allowed' });

  let body = {};
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
  } catch (e) {
    return res.status(400).json({ ok: false, error: 'Invalid JSON' });
  }

  const name = String(body.name || '').trim().slice(0, 120);
  const email = String(body.email || '').trim().slice(0, 200);
  const message = String(body.message || '').trim().slice(0, 5000);

  if (body.website) return res.status(200).json({ ok: true }); // honeypot: bots fill this, silently ignore
  if (!name || !message || !/^\S+@\S+\.\S+$/.test(email)) return res.status(400).json({ ok: false, error: 'Invalid input' });
  if (!process.env.RESEND_API_KEY) return res.status(500).json({ ok: false, error: 'Email service not configured' });

  const to = process.env.CONTACT_TO || 'growferry@gmail.com';
  const from = process.env.CONTACT_FROM || 'Growferry Website <contact@growferry.in>';

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Authorization': 'Bearer ' + process.env.RESEND_API_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from, to: [to], reply_to: email,
        subject: 'New enquiry from ' + name.replace(/[\r\n]/g, ' '),
        html: '<h2>New website enquiry</h2><p><b>Name:</b> ' + esc(name) + '</p><p><b>Email:</b> ' + esc(email) +
              '</p><p><b>Message:</b></p><p>' + esc(message).replace(/\n/g, '<br>') + '</p>'
      })
    });
    if (!r.ok) { console.error('Resend error', r.status, await r.text()); return res.status(502).json({ ok: false }); }
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ ok: false });
  }
};
