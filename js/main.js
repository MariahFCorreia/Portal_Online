// Funções principais e interações da interface
document.addEventListener('DOMContentLoaded', function() {
    // Elementos da interface
    const ctaButton = document.getElementById('cta-button');
    const bookingForm = document.querySelector('.booking-form');
    const serviceCards = document.querySelectorAll('.service-card button');
    const confirmationSection = document.querySelector('.confirmation');
    const newBookingButton = document.getElementById('new-booking');
    
    // Mostrar formulário de agendamento
    function showBookingForm() {
        document.querySelector('.hero').classList.add('hidden');
        document.querySelector('.services').classList.add('hidden');
        bookingForm.classList.remove('hidden');
    }
    
    // Voltar para a página inicial
    function showHome() {
        document.querySelector('.hero').classList.remove('hidden');
        document.querySelector('.services').classList.remove('hidden');
        bookingForm.classList.add('hidden');
        confirmationSection.classList.add('hidden');
    }
    
    // Event listeners
    ctaButton.addEventListener('click', showBookingForm);
    
    newBookingButton.addEventListener('click', function() {
        showHome();
        // Rolando suavemente para o topo
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Cada card de serviço também deve abrir o formulário
    serviceCards.forEach(card => {
        card.addEventListener('click', showBookingForm);
    });
    
    // Configuração inicial do campo de data
    const dateInput = document.getElementById('date');
    const today = new Date();
    const minDate = today.toISOString().split('T')[0];
    dateInput.setAttribute('min', minDate);
    
    // Quando a data muda, atualizar os horários disponíveis
    dateInput.addEventListener('change', function() {
        updateTimeSlots(this.value);
    });
});

// Gerar horários disponíveis (será melhorado posteriormente)
function updateTimeSlots(date) {
    const timeSelect = document.getElementById('time');
    
    // Limpar options existentes
    timeSelect.innerHTML = '<option value="">Selecione um horário</option>';
    
    // Horários fictícios para demonstração
    const timeSlots = [
        '08:00', '09:00', '10:00', '11:00', 
        '14:00', '15:00', '16:00', '17:00'
    ];
    
    // Adicionar horários ao select
    timeSlots.forEach(time => {
        const option = document.createElement('option');
        option.value = time;
        option.textContent = time;
        timeSelect.appendChild(option);
    });
}