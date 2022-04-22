package com.example.cameratest

import android.content.ContentValues.TAG
import android.content.Context
import android.hardware.camera2.CameraAccessException
import android.hardware.camera2.CameraManager
import android.util.Log
import androidx.core.content.ContextCompat.getSystemService

public class OpenCamera {
    private fun openCameraFront(width: Int, height: Int) {
        setUpCameraOutputsFront(width, height)
        configureTransformFront(width, height)
        val manager = activity?.getSystemService(Context.CAMERA_SERVICE) as CameraManager
        try {
            manager.openCamera(cameraIdFront, stateCallbackFront, backgroundHandler)
        } catch (e: CameraAccessException) {
            Log.e(TAG, e.toString())
        }
    }

    private fun openCameraRear(width: Int, height: Int) {
        setUpCameraOutputsRear(width, height)
        configureTransformRear(width, height)
        val manager = activity?.getSystemService(Context.CAMERA_SERVICE) as CameraManager
        try {
            manager.openCamera(cameraIdRear, stateCallbackRear, backgroundHandler)
        } catch (e: CameraAccessException) {
            Log.e(TAG, e.toString())
        }
    }
}