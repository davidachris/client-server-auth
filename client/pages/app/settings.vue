<template>
<div class="container mx-auto p-8">
    <h2 class="text-2xl font-bold text-gray-800 mb-6">Settings</h2>
    <form @submit.prevent="updateSettings" class="space-y-6">
    <!-- Name Input -->
    <div>
        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
        <input
        id="name"
        type="text"
        v-model="settings.name"
        class="mt-1 w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your name"
        required
        />
    </div>

    <!-- Email Input -->
    <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input
        id="email"
        type="email"
        v-model="settings.email"
        class="mt-1 w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your email"
        required
        />
    </div>

    <!-- Password Update -->
    <div>
        <label for="password" class="block text-sm font-medium text-gray-700">New Password</label>
        <input
        id="password"
        type="password"
        v-model="settings.password"
        class="mt-1 w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter a new password"
        />
    </div>

    <!-- Age Input -->
    <div>
        <label for="age" class="block text-sm font-medium text-gray-700">Age</label>
        <input
        id="age"
        type="number"
        v-model="settings.age"
        class="mt-1 w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your age"
        />
    </div>

    <!-- Profile Picture Upload -->
    <div>
        <label for="profilePicture" class="block text-sm font-medium text-gray-700">Profile Picture</label>
        <input
        id="profilePicture"
        type="file"
        @change="handleFileUpload"
        class="mt-1 w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    </div>

    <!-- Submit Button -->
    <div>
        <button
        type="submit"
        class="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
        Save Changes
        </button>
    </div>
    </form>
</div>
</template>

<script setup>
import { ref } from 'vue';

const settings = ref({
name: '',
email: '',
password: '',
age: '',
profilePicture: null,
});

const updateSettings = () => {
console.log('Settings updated:', settings.value);
};

const handleFileUpload = (event) => {
const file = event.target.files[0];
if (file) {
    settings.value.profilePicture = file;
    console.log('Profile picture updated:', file.name);
}
};
</script>
