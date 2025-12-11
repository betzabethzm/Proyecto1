<?php

namespace App\Http\Controllers;

use App\Models\User;               
use Illuminate\Http\Request;
use Inertia\Inertia;              
use Inertia\Response;              

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $users = User::all();

        return Inertia::render('Users/Index', [
            'users' => $users
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // return Inertia::render('Users/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validación y creación
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // Mostrar usuario
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        // return Inertia::render('Users/Edit', [...]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // Actualizar usuario
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // eliminar usuario
    }
}
