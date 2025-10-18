<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         // Hapus user lama dengan email yang sama (jika ada)
        User::where('email', 'admin@example.com')->delete();

        // Tambahkan user admin default
        User::create([
            'name' => 'Administrator',
            'email' => 'admin@example.com',
            'password' => Hash::make('admin123'),
            'role' => 'admin', // pastikan kolom 'role' sudah ada di tabel users
            'domain' => 'site1.com'
        ]);
    }
}
