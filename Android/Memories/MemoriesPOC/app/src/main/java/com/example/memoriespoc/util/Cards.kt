package com.example.memoriespoc.util

import java.io.Serializable

    data class Data (
        val date: String,
        val back: String,
        val front: String,
        val city: String,
        val country: String,
        val latitude: Double,
        val longitude: Double
    ) : Serializable

    fun getData() = listOf(
        Data( "22-02-2022","givan1_1", "givan1_2", "Amsterdam", "Netherlands" , 52.3075 , 4.97222),
        Data( "10-02-2022","pietern1", "pietern2","Paris", "France" ,48.864716 , 2.349014),
        Data( "01-02-2022","pieterm1", "pieterm2","Berlin", "Germany",52.520008 , 13.404954 ),
        Data( "20-01-2022","givan2_1", "givan2_2","Antwerp", "Belgium" ,51.260197 , 4.402771),
        Data("18-01-2022","img_view", "img_couple","Beringe", "Netherlands",51.33775 , 5.94381),
        Data( "22-02-2022","givan1_1", "givan1_2", "Amsterdam", "Netherlands" ,52.3075 , 4.97222),
        Data( "10-02-2022","pietern1", "pietern2","Paris", "France" ,48.864716 , 2.349014),
        Data( "01-02-2022","pieterm1", "pieterm2","Berlin", "Germany" ,52.520008 , 13.404954),
        Data( "20-01-2022","givan2_1", "givan2_2","Antwerp", "Belgium" ,51.260197 , 4.402771),
        Data("18-01-2022","img_view", "img_couple","Beringe", "Netherlands",51.33775 , 5.94381),
        Data( "22-02-2022","givan1_1", "givan1_2","Amsterdam", "Netherlands" ,52.3075 , 4.97222),
        Data("18-01-2022","img_view", "img_couple","Beringe", "Netherlands",51.33775 , 5.94381)
    )