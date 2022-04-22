package com.example.memoriespoc.fragment;

import android.hardware.camera2.CameraAccessException;
import android.hardware.camera2.CameraCaptureSession;
import android.hardware.camera2.CameraDevice;
import android.hardware.camera2.CaptureRequest;
import android.hardware.camera2.TotalCaptureResult;
import android.media.ImageReader;
import android.util.Log;
import android.util.SparseArray;
import android.util.SparseIntArray;
import android.view.Surface;

public class convertToKotlin {

//    private CameraDevice cameraDeviceFront = null;
//    private ImageReader imageReaderFront = null;
//    private static final SparseIntArray ORIENTATIONS = new SparseIntArray();
//    static {
//        ORIENTATIONS.append(Surface.ROTATION_0, 90);
//        ORIENTATIONS.append(Surface.ROTATION_90, 0);
//        ORIENTATIONS.append(Surface.ROTATION_180, 270);
//        ORIENTATIONS.append(Surface.ROTATION_270, 180);
//    }
//
//    private void captureStillImage(){
//        try {
//            CaptureRequest.Builder captureStillBuilder = cameraDeviceFront.createCaptureRequest(CameraDevice.TEMPLATE_STILL_CAPTURE);
//            captureStillBuilder.addTarget(imageReaderFront.getSurface());
//
//            //int rotation = getWindowManager().getDefaultDisplay().getRotation();
//            captureStillBuilder.set(CaptureRequest.JPEG_ORIENTATION, 0);
//
//            CameraCaptureSession.CaptureCallback captureCallback{
//                new CameraCaptureSession.CaptureCallback(){
//                    @Override
//                    public void onCaptureCompleted(CameraCaptureSession session, CaptureRequest request, TotalCaptureResult result){
//                        super.onCaptureCompleted(session,request,result);
//                        Log.i("Testing","Image saved");
//                    }
//                };
//                CameraCaptureSession.capture(
//                        captureStillBuilder.build(), captureCallback, null
//                )
//            }
//        } catch (CameraAccessException e) {
//            e.printStackTrace();
//        }
//
//    }
}
