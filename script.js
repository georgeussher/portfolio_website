const supabaseUrl = 'https://qorwckgtualpxtpdxuau.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFvcndja2d0dWFscHh0cGR4dWF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgyMjI1NjksImV4cCI6MjAwMzc5ODU2OX0.zizLIs6X0hFaU4FZ0WCtg_hCvXuNGznPa67Sia_ogmo';
const supabase =  supabase.createClient(supabaseUrl, supabaseKey);


document.addEventListener('DOMContentLoaded', async() => {
    try {
        const { data, error } = await supabase
        .from('contact')
        .select('*')

        if (error) {
            throw error
        }

        console.log(data)

    } catch (error) {
        console.log('Error fetching contact info:', error)
    }

});