// Navigation between form sections
function nextStep(currentStep, nextStep) {
    // Basic validation for each step
    if (currentStep === 1) {
        const age = document.getElementById('age').value;
        const gender = document.getElementById('gender').value;
        const education = document.getElementById('education').value;
        const occupation = document.getElementById('occupation').value;
        
        if (!age || !gender || !education || !occupation) {
            alert('Please fill in all fields before proceeding.');
            return;
        }
    }
    
    // Hide current section, show next section
    document.getElementById(`section-${currentStep}`).classList.add('hidden');
    document.getElementById(`section-${nextStep}`).classList.remove('hidden');
    
    // Update progress bar
    document.getElementById(`step-${currentStep}`).classList.remove('active');
    document.getElementById(`step-${nextStep}`).classList.add('active');
    
    // Scroll to top of form
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function prevStep(currentStep, prevStep) {
    // Hide current section, show previous section
    document.getElementById(`section-${currentStep}`).classList.add('hidden');
    document.getElementById(`section-${prevStep}`).classList.remove('hidden');
    
    // Update progress bar
    document.getElementById(`step-${currentStep}`).classList.remove('active');
    document.getElementById(`step-${prevStep}`).classList.add('active');
    
    // Scroll to top of form
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Form submission handler
function submitForm() {
    // In a real application, you would collect all form data and send to a server
    // For this demo, we'll just show the results section
    
    // Display loading state (optional)
    document.getElementById('section-4').innerHTML = '<div class="loading"><p>Analyzing your data...</p><div class="spinner"></div></div>';
    
    // Simulate processing delay
    setTimeout(() => {
        // Hide all form sections
        document.querySelectorAll('.form-section').forEach(section => {
            section.classList.add('hidden');
        });
        
        // Show results section
        document.getElementById('results-section').classList.remove('hidden');
        
        // Update progress bar (remove all active classes)
        document.querySelectorAll('.step').forEach(step => {
            step.classList.remove('active');
        });
        
        // Scroll to top of results
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
}

// Checkbox handler for mutually exclusive options
document.addEventListener('DOMContentLoaded', function() {
    // Handle "Never been in a relationship" checkbox
    const relNoneCheckbox = document.getElementById('rel-none');
    const otherRelCheckboxes = document.querySelectorAll('input[name="past-rel"]:not(#rel-none)');
    
    if (relNoneCheckbox) {
        relNoneCheckbox.addEventListener('change', function() {
            if (this.checked) {
                otherRelCheckboxes.forEach(checkbox => {
                    checkbox.checked = false;
                    checkbox.disabled = true;
                });
            } else {
                otherRelCheckboxes.forEach(checkbox => {
                    checkbox.disabled = false;
                });
            }
        });
        
        otherRelCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                if (this.checked && relNoneCheckbox.checked) {
                    relNoneCheckbox.checked = false;
                }
            });
        });
    }
    
    // Handle "Not applicable" breakup reason checkbox
    const breakupNoneCheckbox = document.getElementById('breakup-none');
    const otherBreakupCheckboxes = document.querySelectorAll('input[name="breakup"]:not(#breakup-none)');
    
    if (breakupNoneCheckbox) {
        breakupNoneCheckbox.addEventListener('change', function() {
            if (this.checked) {
                otherBreakupCheckboxes.forEach(checkbox => {
                    checkbox.checked = false;
                    checkbox.disabled = true;
                });
            } else {
                otherBreakupCheckboxes.forEach(checkbox => {
                    checkbox.disabled = false;
                });
            }
        });
        
        otherBreakupCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                if (this.checked && breakupNoneCheckbox.checked) {
                    breakupNoneCheckbox.checked = false;
                }
            });
        });
    }
}); 