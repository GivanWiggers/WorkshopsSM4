package com.example.testarfromscratch

import android.Manifest
import android.content.pm.PackageManager
import android.location.Location
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.ActivityCompat
import com.google.android.gms.location.FusedLocationProviderClient
import com.google.android.gms.location.LocationServices

class MainActivity : AppCompatActivity() {

    private lateinit var fusedLocationClient: FusedLocationProviderClient
    private lateinit var footLocation: Location
//    private lateinit var currentLocation: Location
    private var differenceLongitude: Double = 0.0
    private var differenceLatitude: Double = 0.0
    private var differenceAltitude: Double = 0.0
    private var differenceVector: Double = 0.0
    private var bearingToFoot: Double = 0.0


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        fusedLocationClient = LocationServices.getFusedLocationProviderClient(this)
        footLocation = setFootLocation(5.232413 ,52.358581, 3.0)
        println("PrintInfo footLocation = long: " + footLocation.longitude.toString() + " lat: "+ footLocation.latitude.toString() + " alt: "+ footLocation.altitude.toString())
//        currentLocation =  getLastKnownLocation()
//        println("PrintInfo currentLocation = long: " + currentLocation.longitude.toString() + " lat: "+ currentLocation.latitude.toString() + " alt: "+ currentLocation.altitude.toString())
//        calculateDistance(footLocation, currentLocation)
        getLastKnownLocation()

    }

    private fun setFootLocation(longitude:Double, latitude:Double, altitude: Double): Location {

        val loc = Location("returnLocation")
        loc.longitude = longitude
        loc.latitude = latitude
        loc.altitude = altitude
        return loc
    }

    private fun getLastKnownLocation(){ //private fun getLastKnownLocation(): Location {
//        var location = Location("currentLocationCalculation")
        if (ActivityCompat.checkSelfPermission(
                this,
                Manifest.permission.ACCESS_FINE_LOCATION
            ) != PackageManager.PERMISSION_GRANTED && ActivityCompat.checkSelfPermission(
                this,
                Manifest.permission.ACCESS_COARSE_LOCATION
            ) != PackageManager.PERMISSION_GRANTED
        ) {
            ActivityCompat.requestPermissions(this@MainActivity,
                arrayOf(Manifest.permission.ACCESS_FINE_LOCATION), 1)
            ActivityCompat.requestPermissions(this@MainActivity,
                arrayOf(Manifest.permission.ACCESS_COARSE_LOCATION), 1)
        }
        fusedLocationClient.lastLocation
            .addOnSuccessListener { location->
                if (location != null) {
                    println("PrintInfo Longitude" + " " + location.longitude.toString())
                    println("PrintInfo Latitude" + " " + location.latitude.toString())
                    println("PrintInfo Altitude" + " " + location.altitude.toString())
                    println("PrintInfo Angle" + " " + location.bearing.toString())
                    differenceLongitude = footLocation.longitude - location.longitude
                    differenceLatitude = footLocation.latitude - location.latitude
                    differenceAltitude = footLocation.altitude - location.altitude
                    differenceVector = calculateDistance(footLocation, location).toDouble()
                    bearingToFoot = calculateBearing(footLocation, location).toDouble()


                //currentLocation = location
                } else {
                    println("PrintInfo Location is empty")
                }
                println("PrintInfo differences = long: " + differenceLongitude.toString() + " lat: " + differenceLatitude.toString() + " alt: " + differenceAltitude.toString() + " vector: " + differenceVector.toString())
            }
    }

    private fun calculateDistance(location: Location, currentLocation: Location): Float {
        var distanceVector = location.distanceTo(currentLocation)
        println("PrintInfo Distance= " + distanceVector.toString())
        return distanceVector
    }
    private fun calculateBearing(location: Location, currentLocation: Location): Float {
        var bearing = currentLocation.bearingTo(location)
        println("PrintInfo Bearing= " + bearing.toString())
        return bearing
    }


}